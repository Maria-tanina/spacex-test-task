import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
  StyledMenu,
  StyledMenuItem,
  StyledNavLink,
  StyledRightMenu,
} from "./styles";
import logo from "../../../assets/images/logo.png";
import { Container } from "../../../styles/container";
import { NavLink } from "react-router-dom";
import { FAVORITES_PATH, HOME_PATH } from "../../../constants/paths";
import LikeButton from "../../atoms/LikeButton";
import RippleButton from "../../atoms/RippleButton";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <NavLink to={HOME_PATH}>
            <StyledLogo src={logo} />
          </NavLink>
          <StyledMenu>
            <StyledMenuItem>
              <NavLink to={HOME_PATH}>Home</NavLink>
            </StyledMenuItem>

            <StyledMenuItem>
              <a>Tours</a>
            </StyledMenuItem>

            <StyledMenuItem>
              <a>About</a>
            </StyledMenuItem>

            <StyledMenuItem>
              <a>Help</a>
            </StyledMenuItem>
          </StyledMenu>

          <StyledRightMenu>
            <StyledNavLink to={FAVORITES_PATH}>
              <LikeButton />
            </StyledNavLink>
            <RippleButton>Sign in</RippleButton>
          </StyledRightMenu>
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
export default Header;
