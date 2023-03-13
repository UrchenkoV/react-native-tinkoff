import { View, StyleSheet } from "react-native";
import React from "react";
import Layout from "../layouts/Layout";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Accounts from "../components/Accounts";

const HomeScreen = () => {
  return (
    <Layout>
      <View style={styles.root}>
        <Header />
        <Stories />
        <Accounts />
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    gap: 20,
  },
});
