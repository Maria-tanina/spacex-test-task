import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./components/organisms/Layout";
import { HOME_PATH } from "./constants/paths";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
