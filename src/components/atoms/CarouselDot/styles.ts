import styled from "styled-components";

export const StyledCarouselDot = styled.div<{ $isActive: boolean }>(
  ({ $isActive }) => `
  position: relative;
  z-index: 100;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid white;
  ${
    $isActive
      ? `
     &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 50%;
  }`
      : ""
  }
 
`
);
