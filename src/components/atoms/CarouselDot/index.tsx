import { FC, HTMLAttributes } from "react";
import { StyledCarouselDot } from "./styles";

interface ICarouselDotProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  color: string;
}

const CarouselDot: FC<ICarouselDotProps> = ({ isActive, color, ...rest }) => {
  return <StyledCarouselDot $isActive={isActive} $color={color} {...rest} />;
};

export default CarouselDot;
