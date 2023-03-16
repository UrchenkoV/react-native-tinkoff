import { AntDesign } from "@expo/vector-icons";

export interface ICurrency {
  name: "USD" | "EUR" | "GBP";
  value: string | number;
}

export interface IMoreMenuItem {
  title: string;
  description: string;
  iconName: keyof typeof AntDesign.glyphMap;
  link: string;
}
