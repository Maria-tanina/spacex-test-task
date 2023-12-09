import { Container } from "../../../styles/container";
import { StyledFavoritesBanner, StyledFavoritesTitle } from "./styles";

const FavoritesBanner = () => {
  return (
    <StyledFavoritesBanner>
      <Container>
        <StyledFavoritesTitle>Favorites</StyledFavoritesTitle>
      </Container>
    </StyledFavoritesBanner>
  );
};

export default FavoritesBanner;
