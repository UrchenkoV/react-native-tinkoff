import { IMoreMenuItem } from "./types";

const startLink = "https://ya.ru/";

export const dataListMenu: IMoreMenuItem[] = [
  {
    title: "Заголовок первый.",
    description: "Описание первое очень познавательное.",
    iconName: "home",
    link: `${startLink}`,
  },
  {
    title: "Заголовок второй.",
    description: "Описание второе очень познавательное.",
    iconName: "shoppingcart",
    link: `${startLink}`,
  },
  {
    title: "Заголовок третий.",
    description: "Описание третье очень познавательное.",
    iconName: "windowso",
    link: `${startLink}`,
  },
  {
    title: "Заголовок четвёртый.",
    description: "Описание четвёртое очень познавательное.",
    iconName: "wifi",
    link: `${startLink}`,
  },
  {
    title: "Заголовок пятый.",
    description: "Описание пятое очень познавательное.",
    iconName: "phone",
    link: `${startLink}`,
  },
];
