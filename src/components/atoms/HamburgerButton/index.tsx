import { useRecoilState } from "recoil";
import { menuState } from "../../../state/atoms";
import { StyledBurger } from "./styles";
import { FC, LegacyRef } from "react";

interface IHamburgerButtonProps {
  burgerRef: LegacyRef<HTMLButtonElement> | undefined;
}

const HamburgerButton: FC<IHamburgerButtonProps> = ({ burgerRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuState);

  const clickHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StyledBurger $open={isMenuOpen} onClick={clickHandler} ref={burgerRef}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default HamburgerButton;
