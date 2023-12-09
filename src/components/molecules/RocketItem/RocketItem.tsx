import { FC } from "react";
import { RocketItemFragment } from "./RocketItem.generated";
import {
  StyledRocketBox,
  StyledRocketButtons,
  StyledRocketCard,
  StyledRocketDescription,
  StyledRocketImage,
  StyledRocketTitle,
} from "./styles";
import LikeButton from "../../atoms/LikeButton";
import { rocketImages } from "../../../mockData/carouselData";
import { sliceText } from "../../../helpers/sliceText";
import RippleButton from "../../atoms/RippleButton";
import { useRecoilState } from "recoil";
import { favoritesState } from "../../../state/atoms";
import DeleteButton from "../../atoms/DeleteButton";

interface IRocketItemProps {
  rocket: RocketItemFragment;
  index: number;
  hasDeleteButton?: boolean;
}

const RocketItem: FC<IRocketItemProps> = ({
  rocket,
  index,
  hasDeleteButton,
}) => {
  const { name, description } = rocket;

  const [favorites, setFavorites] = useRecoilState(favoritesState);

  const imageIndex = index % rocketImages.length;

  const isFavorite = favorites.find(
    (favoriteTour) => rocket.id === favoriteTour.id
  );

  const deleteFromFavorites = (rocket: RocketItemFragment) => {
    setFavorites(
      favorites.filter((favoriteTour) => rocket.id !== favoriteTour.id)
    );
  };

  const addToFavorites = (rocket: RocketItemFragment) => {
    const newRocket = {
      ...rocket,
      index,
    };
    isFavorite
      ? deleteFromFavorites(rocket)
      : setFavorites([...favorites, newRocket]);
  };

  return (
    <StyledRocketCard $hasDeleteButton={hasDeleteButton}>
      <StyledRocketImage src={rocketImages[imageIndex]} alt="rocket image" />
      <StyledRocketBox>
        <StyledRocketTitle>{name}</StyledRocketTitle>
        <StyledRocketDescription>
          {description ? sliceText(description, 75) : "No description yet"}
        </StyledRocketDescription>
        <StyledRocketButtons>
          <RippleButton $width="278px">Buy</RippleButton>
          {hasDeleteButton ? (
            <DeleteButton onClick={() => deleteFromFavorites(rocket)} />
          ) : (
            <LikeButton
              onClick={() => addToFavorites(rocket)}
              isActive={!!isFavorite}
            />
          )}
        </StyledRocketButtons>
      </StyledRocketBox>
    </StyledRocketCard>
  );
};

export default RocketItem;
