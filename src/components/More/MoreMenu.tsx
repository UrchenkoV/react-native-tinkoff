import { View, StyleSheet } from "react-native";
import React, { FC } from "react";
import { dataListMenu } from "./dataListMenu";
import MoreMenuItem from "./MoreMenuItem";

const MoreMenu: FC = () => {
  return (
    <View style={styles.root}>
      {dataListMenu.map((obj) => (
        <MoreMenuItem key={obj.title} item={obj} />
      ))}
    </View>
  );
};

export default MoreMenu;

const styles = StyleSheet.create({
  root: {
    gap: 20,
  },
});
