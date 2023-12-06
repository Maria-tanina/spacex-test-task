import { FC } from "react";
import { useGetRocketsQuery } from "./RocketList.generated";
import RocketItem from "../../molecules/RocketItem/RocketItem";

const RocketList: FC = () => {
  const { data, loading, error } = useGetRocketsQuery();

  return (
    <section>
      {error && "Error"}
      {loading
        ? "Loading"
        : data?.rockets && (
            <div>
              {data.rockets.map(
                (rocket) => rocket && <RocketItem rocket={rocket} />
              )}
            </div>
          )}
    </section>
  );
};

export default RocketList;
