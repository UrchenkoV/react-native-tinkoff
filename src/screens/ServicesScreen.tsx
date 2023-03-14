import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../layouts/Layout";
import ServiceItem from "../components/Services/ServiceItem";
import { colors } from "../styles";
import { dataServices } from "../components/Services/dataServices";

export default function ServicesScreen() {
  return (
    <Layout>
      <View style={styles.root}>
        <Text style={styles.title}>Москва</Text>

        <View style={styles.wrapItems}>
          {dataServices.map((item, i) => (
            <ServiceItem key={i} item={item} />
          ))}
        </View>
      </View>
    </Layout>
  );
}

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
  wrapItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
  },
});
