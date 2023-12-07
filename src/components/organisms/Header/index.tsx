import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
  StyledMenu,
  StyledMenuItem,
  StyledRightMenu,
} from "./styles";
import logo from "../../../assets/images/logo.png";
import { Container } from "../../../styles/container";
import { NavLink } from "react-router-dom";
import { HOME_PATH } from "../../../constants/paths";
import LikeButton from "../../atoms/LikeButton";
import ActionButton from "../../atoms/ActionButton";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <StyledLogo src={logo} />
          <StyledMenu>
            <StyledMenuItem>
              <NavLink to={HOME_PATH}>Home</NavLink>
            </StyledMenuItem>

            <StyledMenuItem>
              <NavLink to={HOME_PATH}>Tours</NavLink>
            </StyledMenuItem>

            <StyledMenuItem>
              <NavLink to={HOME_PATH}>About</NavLink>
            </StyledMenuItem>

            <StyledMenuItem>
              <NavLink to={HOME_PATH}>Help</NavLink>
            </StyledMenuItem>
          </StyledMenu>

          <StyledRightMenu>
            <LikeButton />
            <ActionButton>Sign in</ActionButton>
          </StyledRightMenu>
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
export default Header;
