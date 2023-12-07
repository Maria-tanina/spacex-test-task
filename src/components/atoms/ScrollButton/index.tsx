import arrowDown from "../../../assets/icons/ArrowDown.svg";
import { StyledScrollButton } from "./styles";

const ScrollButton = () => {
  return (
    <StyledScrollButton>
      <img src={arrowDown} alt="arrow down" />
    </StyledScrollButton>
  );
};

export default ScrollButton;
