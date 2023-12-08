import styled from "styled-components";

export const StyledRocketCard = styled.div(
  ({ theme: { colors } }) => `
    border: 1px solid ${colors.lightBlue};
    max-width: calc(96%/3);
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
`
);

export const StyledRocketBox = styled.div`
  padding: 32px 32px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledRocketImage = styled.img`
  max-width: 100%;
`;

export const StyledRocketTitle = styled.h5(
  ({ theme: { colors } }) => `
    color: ${colors.darkGray};
    text-align: center;
    font-family: Syne;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 16px;
`
);

export const StyledRocketDescription = styled.div(
  ({ theme: { colors } }) => `
    color: ${colors.blue};
    text-align: center;
    font-family: Lato;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 64px;
    flex: 1 0 auto;
`
);

export const StyledRocketButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
