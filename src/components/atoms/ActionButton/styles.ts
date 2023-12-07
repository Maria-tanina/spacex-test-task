import styled from "styled-components";

export const StyledActionButton = styled.button(
  ({ theme: { colors } }) => `
    background-color: ${colors.lightBlue};
    height: 53px;
    width: 163px;
    font-size: 24px;
    font-family: Syne;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.black};
`
);
