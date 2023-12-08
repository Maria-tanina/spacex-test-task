import Banner from "../../organisms/Banner";
import { slides } from "../../../mockData/carouselData";
import RocketList from "../../organisms/RocketList/RocketList";

const HomePage = () => {
  return (
    <>
      <Banner slides={slides} />
      <RocketList />
    </>
  );
};

export default HomePage;
