import React from "react";
import RocketList from "./components/organisms/RocketList/RocketList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <RocketList />
    </RecoilRoot>
  );
}

export default App;
