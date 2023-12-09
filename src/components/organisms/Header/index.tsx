import {
  StyledAsideMenu,
  StyledAsideMobileMenu,
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
  StyledMenu,
  StyledMenuItem,
  StyledNavLink,
} from "./styles";
import logo from "../../../assets/images/logo.png";
import { Container } from "../../../styles/container";
import { NavLink } from "react-router-dom";
import { FAVORITES_PATH, HOME_PATH } from "../../../constants/paths";
import LikeButton from "../../atoms/LikeButton";
import RippleButton from "../../atoms/RippleButton";
import HamburgerButton from "../../atoms/HamburgerButton";
import { useRecoilState } from "recoil";
import { menuState } from "../../../state/atoms";
import { menuConfig } from "../../../mockData/menuConfig";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuState);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <NavLink to={HOME_PATH}>
            <StyledLogo src={logo} />
          </NavLink>
          <StyledMenu $open={isMenuOpen}>
            {menuConfig.map((menuItem) => {
              return (
                <StyledMenuItem onClick={closeMenu}>
                  <NavLink to={menuItem.link}>{menuItem.name}</NavLink>
                </StyledMenuItem>
              );
            })}

            <StyledAsideMobileMenu>
              <RippleButton onClick={closeMenu}>Sign in</RippleButton>
              <StyledNavLink to={FAVORITES_PATH} onClick={closeMenu}>
                <LikeButton />
              </StyledNavLink>
            </StyledAsideMobileMenu>
          </StyledMenu>

          <StyledAsideMenu>
            <StyledNavLink to={FAVORITES_PATH}>
              <LikeButton />
            </StyledNavLink>
            <RippleButton>Sign in</RippleButton>
          </StyledAsideMenu>
          <HamburgerButton />
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
export default Header;
