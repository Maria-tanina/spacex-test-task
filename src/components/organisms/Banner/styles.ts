import styled from "styled-components";

export const StyledTitle = styled.div(
  ({ theme: { colors } }) => `
    color: ${colors.white};
    text-align: center;
    font-family: Syne;
    font-size: 48px;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    position: relative;
    padding-top: 15%;
    z-index: 100;
    flex-grow: 1;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 310px;
      text-shadow:0px 1px 0 rgb(0,0,0),0px -1px 0 rgb(0,0,0),1px 0px 0 rgb(0,0,0),-1px 0px 0 rgb(0,0,0),1px 1px 0 rgb(0,0,0),1px -1px 0 rgb(0,0,0),-1px 1px 0 rgb(0,0,0),-1px -1px 0 rgb(0,0,0);-webkit-text-shadow:0px 1px 0 rgb(0,0,0),0px -1px 0 rgb(0,0,0),1px 0px 0 rgb(0,0,0),-1px 0px 0 rgb(0,0,0),1px 1px 0 rgb(0,0,0),1px -1px 0 rgb(0,0,0),-1px 1px 0 rgb(0,0,0),-1px -1px 0 rgb(0,0,0);-moz-text-shadow:0px 1px 0 rgb(0,0,0),0px -1px 0 rgb(0,0,0),1px 0px 0 rgb(0,0,0),-1px 0px 0 rgb(0,0,0),1px 1px 0 rgb(0,0,0),1px -1px 0 rgb(0,0,0),-1px 1px 0 rgb(0,0,0),-1px -1px 0 rgb(0,0,0);
    }
`
);

export const StyledBannerWrapper = styled.section<{ $bg: string }>(
  ({ theme: { colors, durations }, $bg }) => `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
  background: url(${$bg}) no-repeat;
  background-size: cover;
  transition: all ${durations.ms800} ease-out;
  padding-bottom: 33px;
  &::after {
    content: "";
    position: absolute;
    z-index: 50;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.48;
    background: ${colors.darkGray};
  }
`
);

export const StyledDotsWrapper = styled.div`
  display: flex;
  z-index: 100;
  gap: 8px;
  position: absolute;
`;

export const StyledLetter = styled.span`
  position: relative;
`;

export const StyledScroller = styled.div`
  color: #fff;
  position: relative;
  z-index: 100;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Lato, sans-serif;
  font-size: 32px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  gap: 8px;
  cursor: pointer;
`;
