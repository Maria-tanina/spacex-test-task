import styled from "styled-components";

export const StyledLikeButton = styled.button<{ $isActive: boolean }>(
  ({ theme: { colors, media }, $isActive }) => `
  height: 53px;
  width: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${$isActive ? colors.pink : colors.lightGray};
  flex: 0 0 auto;
  transition: all 0.4s;
  position: relative;
  z-index: 100;
  
  @media${media.large} {
    padding: 0.5em 0.4em;
    font-size: 18px;
    height: 40px;
    width: 40px;
  }
  
  svg path {
    fill: ${$isActive ? colors.white : colors.gray};
  }
`
);
