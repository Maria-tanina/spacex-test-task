import { atom } from "recoil";
import { TRocketItem } from "../types";

export const bannerState = atom({
  key: "bannerCarousel",
  default: 0,
});

export const rocketCarouselState = atom({
  key: "rocketCarousel",
  default: 0,
});

export const favoritesState = atom({
  key: "favorites",
  default: [] as TRocketItem[],
});

export const menuState = atom({
  key: "menu",
  default: false,
});
