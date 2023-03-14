import { MaterialIcons } from "@expo/vector-icons";

export interface IServiceItem {
  iconName: keyof typeof MaterialIcons.glyphMap;
  title: string;
  percent: number;
}
