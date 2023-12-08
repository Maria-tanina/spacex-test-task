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

interface IRocketItemProps {
  rocket: RocketItemFragment;
  index: number;
}

const RocketItem: FC<IRocketItemProps> = ({ rocket, index }) => {
  const { name, description } = rocket;

  const imageIndex = index % rocketImages.length;
  return (
    <StyledRocketCard>
      <StyledRocketImage src={rocketImages[imageIndex]} alt="rocket image" />
      <StyledRocketBox>
        <StyledRocketTitle>{name}</StyledRocketTitle>
        <StyledRocketDescription>
          {description ? sliceText(description, 75) : "No description yet"}
        </StyledRocketDescription>
        <StyledRocketButtons>
          <RippleButton $width="278px">Buy</RippleButton>
          <LikeButton />
        </StyledRocketButtons>
      </StyledRocketBox>
    </StyledRocketCard>
  );
};

export default RocketItem;
