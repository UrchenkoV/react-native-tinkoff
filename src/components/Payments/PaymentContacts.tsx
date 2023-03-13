import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import PaymentContactItem from "./PaymentContactItem";
import BaseHeading from "../BaseHeading";
import { usePaymentContacts } from "./usePaymentContacts";
import BaseLoader from "../BaseLoader";

const PaymentContacts = () => {
  const { contacts, isLoading } = usePaymentContacts();

  return (
    <View style={styles.root}>
      <BaseHeading title="Переводы контактам" />

      {isLoading ? (
        <BaseLoader />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {contacts.map((obj) => (
            <PaymentContactItem key={obj.id} contact={obj} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default PaymentContacts;

const styles = StyleSheet.create({
  root: {
    paddingLeft: 20,
    gap: 20,
  },
});
