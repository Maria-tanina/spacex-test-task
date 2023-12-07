import { StyledActionButton } from "./styles";
import { FC, ReactNode } from "react";

interface IChildrenType {
  children: ReactNode;
}

const ActionButton: FC<IChildrenType> = ({ children }) => {
  return <StyledActionButton>{children}</StyledActionButton>;
};

export default ActionButton;
