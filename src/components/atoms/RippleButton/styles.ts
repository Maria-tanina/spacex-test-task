import styled from "styled-components";
import { RIPPLE_TIMEOUT } from "../../../constants/timers";

export const StyledActionButton = styled.button<{ $width?: string }>(
  ({ theme: { colors }, $width }) => `
    position: relative;
    background-color: ${colors.lightBlue};
    height: 53px;
    max-width: ${$width || "163px"};
    width: 100%;
    flex: 1 0 auto;
    font-size: 24px;
    font-family: Syne;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.black};
    cursor: pointer;
    overflow: hidden;

    & > .ripple {
      position: absolute;
      transform: translate(-50%, -50%);
      background: #63a4ff;
      border-radius: 50%;
      opacity: 1;
      animation: ${RIPPLE_TIMEOUT}ms ease-out 1 forwards ripple-effect;
    }

    @keyframes ripple-effect {
      0% {
        width: 20px;
        height: 20px;
        opacity: 1;
      }
      50% {
        width: 200px;
        height: 200px;
        opacity: 0.375;
      }
      100% {
        width: ${$width || "163px"}; 
        height: 350px;
        opacity: 0;
      }
    }

    & > .content {
      position: relative;
      z-index: 2;
    }
`
);
