import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { colors } from "../../styles";

const ServiceItemPercent: FC<{ percent: number }> = ({ percent }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{percent}%</Text>
    </View>
  );
};

export default ServiceItemPercent;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 5,
    right: -19,
    transform: [{ rotate: "45deg" }],
    width: "100%",
    backgroundColor: colors.GREEN_100,
  },
  title: {
    color: colors.GREEN_900,
    paddingVertical: 2,
    textAlign: "center",
    fontWeight: "700",
  },
});
