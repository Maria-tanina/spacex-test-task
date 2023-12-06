import { atom } from "recoil";

const favoritesState = atom({
  key: "favorites",
  default: [],
});
