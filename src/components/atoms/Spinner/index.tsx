import {
  StyledElement,
  StyledFirstElement,
  StyledRing,
  StyledSecondElement,
  StyledThirdElement,
} from "./styles";

const Spinner = () => {
  return (
    <StyledRing>
      <StyledFirstElement></StyledFirstElement>
      <StyledSecondElement></StyledSecondElement>
      <StyledThirdElement></StyledThirdElement>
      <StyledElement></StyledElement>
    </StyledRing>
  );
};

export default Spinner;
