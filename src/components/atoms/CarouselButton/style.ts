import styled from "styled-components";

export const StyledCarouselButton = styled.div(
  ({ theme: { colors } }) => `
    background-color: ${colors.lightGray};
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
);
