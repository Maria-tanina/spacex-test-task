import styled from "styled-components";
import banner from "../../../assets/images/banner/banner-3.jpg";

export const StyledFavoritesBanner = styled.section(
  ({ theme: { colors } }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 440px;
  padding-top: 80px;
  background-image: url("${banner}");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    z-index: 50;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    opacity: 0.48;
    background: ${colors.darkGray};
  }
`
);
export const StyledFavoritesTitle = styled.h1(
  ({ theme: { colors, media } }) => `
  color: ${colors.white};
  text-align: center;
  font-family: Syne;
  position: relative;
  z-index: 99;
  font-size: 3.333vw;
  font-weight: 800;
  text-transform: uppercase;
  word-break: break-word;
  
  @media${media.medium} {
    font-size: 30px;
  }
  
  @media${media.small} {
    font-size: 25px;
  }
`
);

export const ads = styled.a`
  word-break: break-word;
`;

export const StyledClearButton = styled.div(
  ({ theme: { colors } }) => `
  color: ${colors.blue};
  text-align: right;
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
`
);
