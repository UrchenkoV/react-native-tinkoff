import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { IFooterItem } from "./types";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../styles";
import { TypeRootStackParamList } from "../../navigation/types";

export interface IFooterNavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const FooterNavItem: React.FC<IFooterNavItem> = ({
  item,
  navigate,
  currentRoute,
}) => {
  const isActive = currentRoute === item.title.en;

  return (
    <TouchableOpacity
      onPress={() => navigate(item.title.en)}
      style={styles.root}
    >
      <AntDesign
        name={item.iconName}
        size={30}
        style={{
          color: isActive ? colors.ACCENT : colors.GRAY_500,
        }}
      />
      <Text style={styles.title}>{item.title.ru}</Text>
    </TouchableOpacity>
  );
};

export default FooterNavItem;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  title: {
    color: colors.GRAY_600,
    fontSize: 15,
  },
});
