import {
  StyledBannerWrapper,
  StyledDotsWrapper,
  StyledMainTitle,
  StyledScroller,
  StyledTitle,
} from "./styles";
import { FC, useEffect } from "react";
import { ISlide } from "../../../mockData/carouselData";
import { StyledCarouselDot } from "../../atoms/CarouselDot/styles";
import { BANNER_INTERVAL } from "../../../constants/timers";
import ScrollButton from "../../atoms/ScrollButton";
import { scrollToBottom } from "../../../helpers/scrollToBottom";
import { useRecoilState } from "recoil";
import { bannerState } from "../../../state/atoms";

interface IBannerProps {
  slides: ISlide[];
}

const Banner: FC<IBannerProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useRecoilState(bannerState);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((activeSlide) => {
        if (activeSlide === slides.length - 1) {
          return 0;
        } else {
          return activeSlide + 1;
        }
      });
    }, BANNER_INTERVAL);

    return () => clearInterval(timer);
  });

  return (
    <StyledBannerWrapper $bg={slides[activeSlide].src}>
      <StyledTitle>
        The space is waiting for
        <StyledMainTitle>
          You
          <StyledDotsWrapper>
            {slides.map((slide, i) => (
              <StyledCarouselDot
                key={slide.src}
                $isActive={i === activeSlide}
                $color="white"
                onClick={() => setActiveSlide(i)}
              />
            ))}
          </StyledDotsWrapper>
        </StyledMainTitle>
      </StyledTitle>
      <StyledScroller onClick={scrollToBottom}>
        Explore tours
        <ScrollButton />
      </StyledScroller>
    </StyledBannerWrapper>
  );
};

export default Banner;
