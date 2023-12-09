import { favoritesState } from "../../../state/atoms";
import { useRecoilState } from "recoil";
import RocketItem from "../../molecules/RocketItem/RocketItem";
import {
  StyledEmptyCard,
  StyledFavoritesList,
  StyledFavoritesListWrapper,
} from "./styles";
import { Container } from "../../../styles/container";
import { StyledClearButton } from "../FavoritesBanner/styles";

const FavoritesList = () => {
  const [favorites, setFavorites] = useRecoilState(favoritesState);
  const emptySpaces = 3;

  const emptyFavoritesCards =
    emptySpaces < favorites.length ? 0 : emptySpaces - favorites.length;

  const emptyIdxArr = Array.from(Array(emptyFavoritesCards).keys());
  const handleClearFavorites = () => {
    setFavorites([]);
  };

  return (
    <StyledFavoritesListWrapper>
      <Container>
        <StyledClearButton onClick={handleClearFavorites}>
          Clear all
        </StyledClearButton>
        <StyledFavoritesList>
          {favorites.map((item) => (
            <RocketItem
              key={item.id}
              rocket={item}
              index={item.index}
              hasDeleteButton={true}
            />
          ))}
          {emptyFavoritesCards > 0 &&
            emptyIdxArr.map((idx) => <StyledEmptyCard key={idx} />)}
        </StyledFavoritesList>
      </Container>
    </StyledFavoritesListWrapper>
  );
};

export default FavoritesList;
