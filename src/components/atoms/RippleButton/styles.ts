import styled from "styled-components";
import { RIPPLE_TIMEOUT } from "../../../constants/timers";

export const StyledActionButton = styled.button<{ $width?: string }>(
  ({ theme: { colors, media }, $width }) => `
    position: relative;
    background-color: ${colors.lightBlue};
    padding: 0.5em 1.4em;
    flex: 1 1 auto;
    font-size: 24px;
    font-family: Syne;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.black};
    cursor: pointer;
    overflow: hidden;
    position: relative;
    z-index: 100;
    
    @media${media.large} {
      padding: 0.5em 0.4em;
      font-size: 18px;
    }

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
