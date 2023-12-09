import { atom } from "recoil";
import { RocketItemFragment } from "../components/molecules/RocketItem/RocketItem.generated";

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
  default: [] as RocketItemFragment[],
});

export const menuState = atom({
  key: "menu",
  default: false,
});
