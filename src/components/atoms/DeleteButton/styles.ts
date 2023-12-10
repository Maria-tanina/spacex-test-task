import styled from "styled-components";

export const StyledDeleteButton = styled.button(
  ({ theme: { colors, media } }) => `
  height: 53px;
  width: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.lightGray};
  flex: 0 0 auto;
  transition: all 0.4s;
  
    @media${media.large} {
    padding: 0.5em 0.4em;
    font-size: 18px;
    height: 40px;
    width: 40px;
  }
`
);
