import { StyledCarouselButton } from "./styles";
import { FC, HTMLAttributes, ReactNode } from "react";

interface ICarouselButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CarouselButton: FC<ICarouselButtonProps> = ({ children, ...rest }) => {
  return <StyledCarouselButton {...rest}>{children}</StyledCarouselButton>;
};

export default CarouselButton;
