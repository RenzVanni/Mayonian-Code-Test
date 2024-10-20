import {
  cashierSvg,
  casinoLiveSvg,
  favoritesSvg,
  inviteSvg,
  sportsSvg,
} from "../assets/navigationSvg";
import { CASHIER, FAVORITES, INDEX, INVITE, SPORTS } from "../Constants/slugs";

export const navigationData = [
  {
    id: 1,
    icon: sportsSvg,
    name: "sports",
    slug: SPORTS,
  },
  {
    id: 2,
    icon: favoritesSvg,
    name: "favorites",
    slug: FAVORITES,
  },
  {
    id: 3,
    icon: inviteSvg,
    name: "invite",
    slug: INVITE,
  },
  {
    id: 4,
    icon: casinoLiveSvg,
    name: "casino live",
    slug: INDEX,
  },
  {
    id: 5,
    icon: cashierSvg,
    name: "cashier",
    slug: CASHIER,
  },
];
