import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { useCurrencies } from "./useCurrencies";
import { BOX_SHADOW, colors } from "../../styles";
import BaseLoader from "../BaseLoader";

const MoreCurrencies: FC = () => {
  const { isLoading, currencies } = useCurrencies();

  return (
    <View style={styles.root}>
      {isLoading ? (
        <BaseLoader />
      ) : (
        currencies.map((obj) => (
          <View key={obj.name} style={styles.item}>
            <Text style={styles.name}>{obj.name}:</Text>
            <Text style={styles.value}>{obj.value}</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default MoreCurrencies;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    padding: 15,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    ...BOX_SHADOW.sm,
  },
  item: {
    flexDirection: "row",
    gap: 5,
  },
  name: {
    color: colors.GRAY_600,
  },
  value: {
    color: colors.GRAY_900,
    fontWeight: "600",
  },
});
