import styled from "styled-components";

interface StyledCarouselDotProps {
  $isActive: boolean;
  $color: string;
}

export const StyledCarouselDot = styled.div<StyledCarouselDotProps>(
  ({ $isActive, $color }) => `
  position: relative;
  z-index: 100;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${$color};
  cursor: pointer;
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
    background-color: ${$color};
    border-radius: 50%;
  }`
      : ""
  }
 
`
);
