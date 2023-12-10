import {
  StyledBannerWrapper,
  StyledDotsWrapper,
  StyledLetter,
  StyledScroller,
  StyledTitle,
} from "./styles";
import { FC, useEffect } from "react";
import { ISlide } from "../../../mockData/carouselData";
import { BANNER_INTERVAL } from "../../../constants/timers";
import ScrollButton from "../../atoms/ScrollButton";
import { useRecoilState } from "recoil";
import { bannerState } from "../../../state/atoms";
import CarouselDot from "../../atoms/CarouselDot";

interface IBannerProps {
  slides: ISlide[];
  scrollFunc: () => void;
}

const Banner: FC<IBannerProps> = ({ slides, scrollFunc }) => {
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
        <span>
          <span>y</span>
          <StyledLetter>
            o
            <StyledDotsWrapper>
              {slides.map((slide, i) => (
                <CarouselDot
                  key={slide.src}
                  isActive={i === activeSlide}
                  color="white"
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </StyledDotsWrapper>
          </StyledLetter>
          <span>u</span>
        </span>
      </StyledTitle>
      <StyledScroller onClick={scrollFunc}>
        Explore tours
        <ScrollButton />
      </StyledScroller>
    </StyledBannerWrapper>
  );
};

export default Banner;
