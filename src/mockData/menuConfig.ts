import {
  ABOUT_PATH,
  HELP_PATH,
  HOME_PATH,
  TOURS_PATH,
} from "../constants/paths";

interface IMenuConfig {
  name: string;
  link: string;
}

export const menuConfig: IMenuConfig[] = [
  {
    name: "Home",
    link: HOME_PATH,
  },
  {
    name: "Tours",
    link: TOURS_PATH,
  },
  {
    name: "About",
    link: ABOUT_PATH,
  },
  {
    name: "Help",
    link: HELP_PATH,
  },
];
