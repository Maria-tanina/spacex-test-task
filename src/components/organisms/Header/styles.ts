import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HTMLAttributes, RefObject } from "react";

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
interface IStyledMenuProps extends HTMLAttributes<HTMLUListElement> {
  $open: boolean;
  ref: RefObject<HTMLDivElement>;
}

export const StyledMenu = styled.ul<IStyledMenuProps>(
  ({ theme: { media }, $open }) => `
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
  overflow-y: auto;
  
  @media${media.large} {
    display: block;
    position: fixed;
    padding: 44px 60px 40px;
    right: 0;
    bottom: 0;
    width: 400px;
    background-color: #001698;
    transform: ${$open ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    top: 0;
    height: 100%;
    width: 240px;
    background: rgba(0,0,0,.8);
    z-index: 150;
  }
`
);

export const StyledMenuItem = styled.li(
  ({ theme: { durations, colors, media } }) => `
   text-transform: uppercase;
   color: ${colors.white};
   padding-bottom: 4px;
   cursor: pointer;
   font-size: 16px;
   font-family: Lato-Medium, sans-serif;
   border-bottom: 1px solid transparent;
   position: relative;
   
   @media${media.large} {
     padding: 20px 0;
     text-align: center;
   }
  
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
      background-color: ${colors.white};
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
        background-color: ${colors.white};
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

export const StyledAsideMenu = styled.div(
  ({ theme: { media } }) => `
  display: flex;
  gap: 12px;

  @media${media.large} {
    display: none;
  }
`
);

export const StyledAsideMobileMenu = styled.div(
  ({ theme: { media, colors } }) => `
  display: none;
  gap: 12px;
  flex-direction: column;
  padding-top: 30px;
  position: relative;
  
  @media${media.large} {
    display: flex;
  }
  
  button {
    width: 100%;
  }
  
   &:after {
     content: '';
     position: absolute;
     z-index: 500;
     top: 10px;
     left: 0;
     height: 1px;
     width: 100%;
     background-color: ${colors.white};
   }

`
);

export const StyledNavLink = styled(NavLink)(
  ({ theme: { colors } }) => `
  flex: 0 1 auto;
  &.active button{
    background-color: ${colors.pink};
    svg path{
      fill: ${colors.white}
    }
  }
`
);
