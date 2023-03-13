import { View, ScrollView, StyleSheet } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import { colors } from "../styles";

interface ILayout {
  isScrollView?: boolean;
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
  children,
  isScrollView = true,
}) => {
  return (
    <View style={styles.root}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: colors.WHITE,
  },
});
