import image1 from "../assets/images/banner/banner-1.jpg";
import image2 from "../assets/images/banner/banner-2.jpg";
import image3 from "../assets/images/banner/banner-3.jpg";

export interface ISlide {
  src: string;
  alt: string;
}

export const slides: ISlide[] = [
  {
    src: image1,
    alt: "space",
  },
  {
    src: image2,
    alt: "space",
  },
  {
    src: image3,
    alt: "space",
  },
];

export const rocketImages = [image1, image2, image3];
