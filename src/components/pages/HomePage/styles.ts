import styled from "styled-components";

export const StyledToursSection = styled.section`
  padding: 96px 0;
`;

export const StyledToursTitle = styled.h2(
  ({ theme: { colors } }) => `
  color: ${colors.darkGray};
  font-family: Syne;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`
);

export const StyledToursHeader = styled.div`
     display: flex;
     justify-content: space-between;
     margin-bottom: 43px;
`;

export const StyledCarouselArrows = styled.div`
 display: flex;
 gap: 16px;
`;
