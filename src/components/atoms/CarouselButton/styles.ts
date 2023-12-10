import styled from "styled-components";

export const StyledCarouselButton = styled.div(
  ({ theme: { colors, media } }) => `
    background-color: ${colors.lightGray};
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    @media${media.large} {
      padding: 0.5em 0.4em;
      font-size: 18px;
      height: 40px;
      width: 40px;
    }
`
);
