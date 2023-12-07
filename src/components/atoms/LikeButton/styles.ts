import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLikeButton = styled(NavLink)(
  ({ theme: { colors } }) => `
  height: 53px;
  width: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGray};
`
);
