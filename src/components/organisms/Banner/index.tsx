import {
  StyledBannerWrapper,
  StyledDotsWrapper,
  StyledLetter,
  StyledScroller,
  StyledTitle,
} from "./styles";
import { FC, useEffect, useState } from "react";
import { ISlide } from "../../../mockData/carouselData";
import { StyledCarouselDot } from "../../atoms/CarouselDot/styles";
import { BANNER_INTERVAL } from "../../../constants/timers";
import ScrollButton from "../../atoms/ScrollButton";

interface IBannerProps {
  slides: ISlide[];
}

const Banner: FC<IBannerProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

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
        <span>
          <span>y</span>
          <StyledLetter>
            o
            <StyledDotsWrapper>
              {slides.map((slide, i) => (
                <StyledCarouselDot
                  $isActive={i === activeSlide}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </StyledDotsWrapper>
          </StyledLetter>
          <span>u</span>
        </span>
      </StyledTitle>
      <StyledScroller>
        Explore tours
        <ScrollButton />
      </StyledScroller>
    </StyledBannerWrapper>
  );
};

export default Banner;
