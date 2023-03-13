import { View, StyleSheet } from "react-native";
import React from "react";
import { IFooterItem } from "./Footer/types";
import { colors } from "../styles";
import { AntDesign } from "@expo/vector-icons";

interface IBaseIcon extends Pick<IFooterItem, "iconName"> {}

const BaseIcon: React.FC<IBaseIcon> = ({ iconName }) => {
  return (
    <View style={styles.root}>
      <AntDesign name={iconName} size={24} color={colors.WHITE} />
    </View>
  );
};

export default BaseIcon;

const styles = StyleSheet.create({
  root: {
    width: 50,
    height: 50,
    backgroundColor: colors.ACCENT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
