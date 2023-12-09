import { useRecoilState } from "recoil";
import { menuState } from "../../../state/atoms";
import { StyledBurger } from "./styles";

const HamburgerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuState);

  const clickHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StyledBurger $open={isMenuOpen} onClick={clickHandler}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default HamburgerButton;
