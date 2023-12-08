import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header(
  ({ theme: { fontSizes, sizes } }) => `
    font-size: ${fontSizes.small};
    height: ${sizes.header.height};
    background: rgba(30, 30, 30, 0.48);
    position: fixed;
    width: 100%;
    z-index: 100;
`
);

export const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const StyledMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
`;

export const StyledMenuItem = styled.li(
  ({ theme: { durations, colors } }) => `
   text-transform: uppercase;
   color: ${colors.white};
   padding-bottom: 4px;
   cursor: pointer;
   font-size: 16px;
   font-family: Lato-Medium, sans-serif;
   border-bottom: 1px solid transparent;
   position: relative;
  
  a {
    padding-bottom: 4px;
    font-size: 16px;
    font-family: Lato-Medium, sans-serif;
    border-bottom: 1px solid transparent;
    position: relative;
  @keyframes underlineAnimation {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
  
  &:not(.active):hover {
    &:after {
      content: '';
      position: absolute;
      z-index: 500;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: #fff;
      animation: underlineAnimation 300ms ease-out;
      animation-iteration-count: 1;
    }
    transform-origin: bottom right;
  }
    &.active {
      &:after {
        content: '';
        position: absolute;
        z-index: 500;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #fff;
      }
    }
  }  
`
);

export const StyledLogo = styled.img`
  height: 42px;
  width: 230px;
  cursor: pointer;
`;

export const StyledRightMenu = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledNavLink = styled(NavLink)(
  ({ theme: { colors } }) => `
  &.active button{
    background-color: ${colors.pink};
    svg path{
      fill: ${colors.white}
    }
  }
`
);
