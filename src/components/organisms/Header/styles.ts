import styled from "styled-components";

export const StyledHeader = styled.header(
  ({ theme: { fontSizes, sizes } }) => `
    font-size: ${fontSizes.small};
    height: ${sizes.header.height};
    background: rgba(30, 30, 30, 0.48);
    position: absolute;
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

export const StyledMenu = styled.ul `
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
`;

export const StyledMenuItem = styled.li(
  ({ theme: { durations, colors } }) => `
   text-transform: uppercase;
   color: ${colors.white};
   a {
       padding-bottom: 4px;
       font-size: 16px;
       font-family: Lato-Medium, sans-serif;
       border-bottom: 1px solid transparent;
       transition: all ${durations.ms400};
       &:hover {
        border-bottom: 1px solid ${colors.white};
       }
   }
`
);

export const StyledLogo = styled.img`
  height: 42px;
  width: 230px;
`;

export const StyledRightMenu = styled.div`
  display: flex;
  gap: 12px;
`;
