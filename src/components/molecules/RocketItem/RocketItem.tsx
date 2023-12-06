import { FC } from "react";
import { RocketItemFragment } from "./RocketItem.generated";

interface IRocketItemProps {
  rocket: RocketItemFragment;
}

const RocketItem: FC<IRocketItemProps> = ({ rocket }) => {
  const { id, name, description } = rocket;
  return <div></div>;
};

export default RocketItem;
