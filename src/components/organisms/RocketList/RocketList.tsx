import { FC } from "react";
import { useGetRocketsQuery } from "./RocketList.generated";
import RocketItem from "../../molecules/RocketItem/RocketItem";
import { StyledRocketList, StyledDotsWrapper } from "./styles";
import { StyledCarouselDot } from "../../atoms/CarouselDot/styles";
import { useRecoilState } from "recoil";
import { rocketCarouselState } from "../../../state/atoms";
import {
  StyledCarouselArrows,
  StyledToursHeader,
  StyledToursSection,
  StyledToursTitle,
} from "../../pages/HomePage/styles";
import { Container } from "../../../styles/container";
import { StyledCarouselButton } from "../../atoms/CarouselButton/style";
import arrowLeft from "../../../assets/icons/ArrowLeft.svg";
import arrowRight from "../../../assets/icons/ArrowRight.svg";

const RocketList: FC = () => {
  const { data, loading, error } = useGetRocketsQuery();
  const [activeSlide, setActiveSlide] = useRecoilState(rocketCarouselState);
  const slidesPerRow = 3;

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

  return (
    <StyledToursSection>
      <Container>
        <StyledToursHeader>
          <StyledToursTitle>popular tours</StyledToursTitle>
          <StyledCarouselArrows>
            <StyledCarouselButton onClick={() => handleArrowClick("left")}>
              <img src={arrowLeft} alt="arrow left" />
            </StyledCarouselButton>
            <StyledCarouselButton onClick={() => handleArrowClick("right")}>
              <img src={arrowRight} alt="arrow right" />
            </StyledCarouselButton>
          </StyledCarouselArrows>
        </StyledToursHeader>

        <div>
          {error && "Error"}
          {loading ? (
            "Loading"
          ) : (
            <div style={{ overflow: "hidden" }}>
              <StyledRocketList
                style={{
                  transition: "transform 0.5s ease",
                  transform: `translateX(-${
                    activeSlide * (102 / slidesPerRow)
                  }%)`,
                }}
              >
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
                  <StyledCarouselDot
                    key={dotIndex}
                    $isActive={dotIndex === activeSlide}
                    $color="black"
                    onClick={() => handleDotClick(dotIndex)}
                  />
                ))}
              </StyledDotsWrapper>
            </div>
          )}
        </div>
      </Container>
    </StyledToursSection>
  );
};

export default RocketList;
