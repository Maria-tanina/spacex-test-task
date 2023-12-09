import Banner from "../../organisms/Banner";
import { slides } from "../../../mockData/carouselData";
import RocketList from "../../organisms/RocketList/RocketList";
import { LegacyRef, useRef } from "react";

const HomePage = () => {
  const rocketsRef = useRef<HTMLDivElement | undefined>(null);

  const scrollToRocketList = () => {
    rocketsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Banner slides={slides} scrollFunc={scrollToRocketList} />
      <RocketList
        rocketListRef={rocketsRef as LegacyRef<HTMLDivElement> | undefined}
      />
    </>
  );
};

export default HomePage;
