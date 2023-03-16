import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../layouts/Layout";
import MoreCurrencies from "../components/More/MoreCurrencies";
import MoreMenu from "../components/More/MoreMenu";
import { colors } from "../styles";

const MoreScreen: React.FC = () => {
  return (
    <Layout>
      <View style={styles.root}>
        <Text style={styles.title}>Валюты</Text>
        <MoreCurrencies />
        <MoreMenu />
      </View>
    </Layout>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    gap: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.GRAY_700,
    textAlign: "center",
  },
});
