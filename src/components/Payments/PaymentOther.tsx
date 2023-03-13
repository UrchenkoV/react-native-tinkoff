import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import BaseHeading from "../BaseHeading";
import { otherItems } from "./dataOtherItems";
import PaymentOtherItem from "./PaymentOtherItem";

const PaymentOther: React.FC = () => {
  return (
    <View style={styles.root}>
      <BaseHeading title="Важные платежи" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            gap: 15,
            flexDirection: "row",
            marginHorizontal: 3,
            marginVertical: 4,
          }}
        >
          {otherItems.map((obj) => (
            <PaymentOtherItem key={obj.title} item={obj} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentOther;

const styles = StyleSheet.create({
  root: {
    paddingLeft: 20,
    gap: 20,
  },
});
