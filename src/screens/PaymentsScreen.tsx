import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../layouts/Layout";
import Header from "../components/Header";
import PaymentContacts from "../components/Payments/PaymentContacts";
import PaymentOther from "../components/Payments/PaymentOther";

export default function PaymentsScreen() {
  return (
    <Layout>
      <View style={styles.root}>
        <Header title="Платежи" />
        <PaymentContacts />
        <PaymentOther />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 20,
  },
});
