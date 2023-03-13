import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../styles";

const BaseHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BaseHeading;

const styles = StyleSheet.create({
  title: {
    color: colors.GRAY_600,
    fontSize: 18,
    fontWeight: "500",
  },
});
