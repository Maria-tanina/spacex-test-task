import like from "../../../assets/icons/Heart.svg";
import { StyledLikeButton } from "./styles";
import { FAVORITES_PATH } from "../../../constants/paths";

const LikeButton = () => {
  return (
    <StyledLikeButton to={FAVORITES_PATH}>
      <img src={like} alt="Heart icon" />
    </StyledLikeButton>
  );
};

export default LikeButton;
