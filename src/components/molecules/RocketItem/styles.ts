import styled from "styled-components";
import { SLIDES_PER_POW } from "../../../constants/slider";

export const StyledRocketCard = styled.div<{ $isSliderCard?: boolean }>(
  ({ theme: { colors, media }, $isSliderCard }) => `
    border: 1px solid ${colors.lightBlue};
    ${
      $isSliderCard &&
      `
      flex: 1 0 auto;
      max-width: calc(96%/${SLIDES_PER_POW.large});
      
      @media${media.medium} {
        max-width: calc(96%/${SLIDES_PER_POW.medium});
      }
      
      @media${media.small} {
        max-width: calc(100%/${SLIDES_PER_POW.small});
      }
    `
    };
    display: flex;
    flex-direction: column;
`
);

export const StyledRocketBox = styled.div(
  ({ theme: { media } }) => `
  padding: 2.222vw 2.222vw 1.667vw;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media${media.large} {
    padding: 20px 20px 15px;
  }
`
);

export const StyledRocketImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 1.38/1;
`;

export const StyledRocketTitle = styled.h5(
  ({ theme: { colors, media } }) => `
    color: ${colors.darkGray};
    text-align: center;
    font-family: Syne;
    font-size: 1.667vw;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 16px;
    
    @media${media.large} {
      font-size: 16px;
    }
`
);

export const StyledRocketDescription = styled.div(
  ({ theme: { colors, media } }) => `
    color: ${colors.blue};
    text-align: center;
    font-family: Lato;
    font-size: 1.667vw;
    font-weight: 300;
    margin-bottom: 4.444vw;
    flex: 1 0 auto;
    
    @media${media.large} {
      font-size: 16px;
      margin-bottom: 15px;
    }
`
);

export const StyledRocketButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
