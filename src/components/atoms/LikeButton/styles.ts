import styled from "styled-components";

export const StyledLikeButton = styled.button(
  ({ theme: { colors } }) => `
  height: 53px;
  width: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.lightGray};
  flex: 1 0 auto;
  transition: all 0.4s;
`
);
