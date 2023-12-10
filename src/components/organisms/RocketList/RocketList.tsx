import { FC, HTMLAttributes, LegacyRef } from "react";
import { useGetRocketsQuery } from "./RocketList.generated";
import RocketItem from "../../molecules/RocketItem/RocketItem";
import {
  StyledRocketList,
  StyledDotsWrapper,
  StyledRocketListWrapper,
} from "./styles";
import { useRecoilState } from "recoil";
import { rocketCarouselState } from "../../../state/atoms";
import {
  StyledCarouselArrows,
  StyledToursHeader,
  StyledToursSection,
  StyledToursTitle,
} from "./styles";
import { Container } from "../../../styles/container";
import { StyledCarouselButton } from "../../atoms/CarouselButton/styles";
import arrowLeft from "../../../assets/icons/ArrowLeft.svg";
import arrowRight from "../../../assets/icons/ArrowRight.svg";
import Spinner from "../../atoms/Spinner";
import CarouselButton from "../../atoms/CarouselButton";
import CarouselDot from "../../atoms/CarouselDot";

interface IRocketListProps extends HTMLAttributes<HTMLDivElement> {
  rocketListRef: LegacyRef<HTMLDivElement> | undefined;
}

const RocketList: FC<IRocketListProps> = ({ rocketListRef }) => {
  const { data, loading, error } = useGetRocketsQuery();

  const [activeSlide, setActiveSlide] = useRecoilState(rocketCarouselState);

  const totalSlides = data?.rockets?.length || 0;

  const handleDotClick = (dotIndex: number) => {
    setActiveSlide(dotIndex);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    const totalSlides = data?.rockets?.length || 0;

    if (direction === "left") {
      setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    } else if (direction === "right") {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  if (error) {
    return <div>{error.message || "Oops! Some error occurred"}</div>;
  }

  return (
    <StyledToursSection ref={rocketListRef}>
      <Container>
        <StyledToursHeader>
          <StyledToursTitle>popular tours</StyledToursTitle>
          {!loading && (
            <StyledCarouselArrows>
              <CarouselButton onClick={() => handleArrowClick("left")}>
                <img src={arrowLeft} alt="arrow left" />
              </CarouselButton>
              <StyledCarouselButton onClick={() => handleArrowClick("right")}>
                <img src={arrowRight} alt="arrow right" />
              </StyledCarouselButton>
            </StyledCarouselArrows>
          )}
        </StyledToursHeader>

        {loading ? (
          <Spinner />
        ) : (
          <StyledRocketListWrapper>
            <StyledRocketList $activeSlide={activeSlide}>
              {data?.rockets &&
                data.rockets.map(
                  (rocket, i) =>
                    rocket && (
                      <RocketItem key={rocket.id} rocket={rocket} index={i} />
                    )
                )}
            </StyledRocketList>
            <StyledDotsWrapper>
              {[...Array(totalSlides)].map((_, dotIndex) => (
                <CarouselDot
                  key={dotIndex}
                  isActive={dotIndex === activeSlide}
                  color="black"
                  onClick={() => handleDotClick(dotIndex)}
                />
              ))}
            </StyledDotsWrapper>
          </StyledRocketListWrapper>
        )}
      </Container>
    </StyledToursSection>
  );
};

export default RocketList;
