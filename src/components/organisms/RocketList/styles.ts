import styled from "styled-components";
import { SLIDES_PER_POW } from "../../../constants/slider";

interface IStyledRocketListProps {
  $activeSlide: number;
}

export const StyledRocketList = styled.div<IStyledRocketListProps>(
  ({ $activeSlide, theme: { media } }) => `
  display: flex;
  justify-content: space-between;
  gap: 2%;
  margin-bottom: 40px;
  transition: transform 0.5s ease;
  transform: translateX(-${$activeSlide * (102 / SLIDES_PER_POW)}%);
  @media${media.medium} {
    transform: translateX(-${$activeSlide * (102 / 2)}%);
    gap: 3%;
  }
  @media${media.small} {
    transform: translateX(-${$activeSlide * 100}%);
    gap: 0;
  }
`
);

export const StyledToursSection = styled.section(
  ({ theme: { sizes, media } }) => `
  padding: ${sizes.section.paddings};
  
  @media${media.small} {
    padding: 60px 0;    
  }
`
);

export const StyledToursTitle = styled.h2(
  ({ theme: { colors, media } }) => `
  color: ${colors.darkGray};
  font-family: Syne;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  
    @media${media.medium} {
    font-size: 25px;
  }
`
);

export const StyledToursHeader = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 43px;

`;

export const StyledCarouselArrows = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledRocketListWrapper = styled.div`
  overflow: hidden;
`;

export const StyledDotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 100;
  gap: 8px;
`;
