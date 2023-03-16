import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import BaseAvatar from "../BaseAvatar";
import { colors } from "../../styles";

const SupportHeader: FC = () => {
  return (
    <View style={styles.root}>
      <BaseAvatar
        size="large"
        image="https://www.stenka24.ru/wp-content/uploads/2019/12/tinkoff-logo.png"
      />
      <View>
        <Text style={styles.title}>Поддержка</Text>
        <Text style={styles.subTitle}>Мы вседа на связи</Text>
      </View>
    </View>
  );
};

export default SupportHeader;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  title: {
    color: colors.BLACK,
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 1,
  },
  subTitle: {
    fontSize: 15,
    color: colors.GRAY_600,
  },
});
