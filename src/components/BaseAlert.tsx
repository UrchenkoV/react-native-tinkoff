import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { colors } from "../styles";

interface IBaseAlert {
  text: string;
}

const BaseAlert: FC<IBaseAlert> = ({ text }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default BaseAlert;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.GREEN_100,
    borderRadius: 10,
  },
  text: {
    color: colors.GREEN_900,
    fontSize: 16,
  },
});
