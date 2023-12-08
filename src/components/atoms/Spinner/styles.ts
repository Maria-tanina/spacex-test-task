import styled from "styled-components";

export const StyledRing = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  padding-top: 50px;
`;

export const StyledElement = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid black;
  border-radius: 50%;
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: black transparent transparent transparent;
`;

export const StyledFirstElement = styled(StyledElement)`
  animation-delay: -0.45s;
`;

export const StyledSecondElement = styled(StyledElement)`
  animation-delay: -0.3s;
`;

export const StyledThirdElement = styled(StyledElement)`
  animation-delay: -0.15s;
`;
