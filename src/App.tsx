import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./components/organisms/Layout";
import { FAVORITES_PATH, HOME_PATH } from "./constants/paths";
import HomePage from "./components/pages/HomePage";
import FavoritesPage from "./components/pages/FavoritesPage";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={FAVORITES_PATH} element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
