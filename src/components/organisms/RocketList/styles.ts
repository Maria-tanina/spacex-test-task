import styled from "styled-components";
import { SLIDES_PER_POW } from "../../../constants/slider";

interface IStyledRocketListProps {
  $activeSlide: number;
}

export const StyledRocketList = styled.div<IStyledRocketListProps>(
  ({ $activeSlide }) => `
  display: flex;
  justify-content: space-between;
  gap: 2%;
  margin-bottom: 40px;
  transition: transform 0.5s ease;
  transform: translateX(-${$activeSlide * (102 / SLIDES_PER_POW)}%)
`
);

export const StyledRocketListWrapper = styled.div`
  overflow: hidden;
`;

export const StyledDotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 100;
  gap: 8px;
`;
