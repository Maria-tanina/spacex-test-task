import { atom } from "recoil";

export const bannerState = atom({
  key: "bannerCarousel",
  default: 0,
});

export const rocketCarouselState = atom({
  key: "rocketCarousel",
  default: 0,
});
