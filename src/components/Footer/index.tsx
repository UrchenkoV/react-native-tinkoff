import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { colors } from "../../styles";
import { menuList } from "./menuList";
import FooterNavItem from "./FooterNavItem";
import { TypeRootStackParamList } from "../../navigation/types";

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
  return (
    <View style={styles.root}>
      {menuList.map((item) => (
        <FooterNavItem
          key={item.title.en}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: colors.WHITE,
    borderTopColor: colors.GRAY_300,
    borderTopWidth: 1,
  },
});
