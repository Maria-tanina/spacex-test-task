import styled from "styled-components";

export const StyledBurger = styled.button<{ $open: boolean }>(
  ({ theme: { media }, $open }) => `
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 500;
  
  @media${media.large} {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #EFFFFA;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${$open ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${$open ? "0" : "1"};
      transform: ${$open ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${$open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`
);
