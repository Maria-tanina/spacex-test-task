import { StyledNotFoundImage, StyledNotFoundWrapper } from "./styles";
import notFound from "../../../assets//images/404.jpg";
import RippleButton from "../../atoms/RippleButton";
import { NavLink } from "react-router-dom";
import { HOME_PATH } from "../../../constants/paths";

const NotFoundPage = () => {
  return (
    <StyledNotFoundWrapper>
      <StyledNotFoundImage src={notFound} alt="Not found" />
      <RippleButton>
        <NavLink to={HOME_PATH}>Go back</NavLink>
      </RippleButton>
    </StyledNotFoundWrapper>
  );
};

export default NotFoundPage;
