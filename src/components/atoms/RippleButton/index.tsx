import { FC, ReactNode, useState } from "react";
import { StyledActionButton } from "./styles";
import { RIPPLE_TIMEOUT } from "../../../constants/timers";

interface IRippleButtonProps {
  children: ReactNode;
  $width?: string;
}

const RippleButton: FC<IRippleButtonProps> = ({ children, $width }) => {
  const [isRippling, setIsRippling] = useState(false);

  const startRipple = () => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), RIPPLE_TIMEOUT);
  };

  return (
    <StyledActionButton $width={$width} onClick={startRipple}>
      {isRippling && <span className="ripple" />}
      <span className="content">{children}</span>
    </StyledActionButton>
  );
};

export default RippleButton;
