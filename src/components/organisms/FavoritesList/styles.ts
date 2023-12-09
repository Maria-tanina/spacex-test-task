import styled from "styled-components";

export const StyledFavoritesListWrapper = styled.section(
  ({ theme: { sizes } }) => `
    padding: ${sizes.section.paddings};
`
);

export const StyledFavoritesList = styled.div(
  ({ theme: { media } }) => `
  padding-top: 40px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  
  @media${media.medium} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media${media.small} {
    grid-template-columns: 1fr;
  }
`
);

export const StyledEmptyCard = styled.div(
  ({ theme: { colors } }) => `
  border: 1px solid ${colors.lightBlue};
  min-height: 39.722vw;
`
);
