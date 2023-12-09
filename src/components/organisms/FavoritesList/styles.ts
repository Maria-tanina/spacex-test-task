import styled from "styled-components";

export const StyledFavoritesListWrapper = styled.section(
  ({ theme: { sizes } }) => `
    padding: ${sizes.section.paddings};
`
);

export const StyledFavoritesList = styled.div`
  padding-top: 40px;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledEmptyCard = styled.div(
  ({ theme: { colors } }) => `
  border: 1px solid ${colors.lightBlue};
  min-height: 36em;
`
);
