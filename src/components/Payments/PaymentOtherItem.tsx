import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { IPaymentOtherItem } from "./types";
import BaseIcon from "../BaseIcon";
import { BOX_SHADOW, colors } from "../../styles";
import { handleTransfer } from "./handleTransfer";
import { useAccounts } from "../Accounts/useAccounts";
import PaymentDialog from "./PaymentDialog";

const CASH_CARD_NUMBER = "9504 6481 8278 3083";

const PaymentOtherItem: React.FC<{ item: IPaymentOtherItem }> = ({ item }) => {
  const { accounts } = useAccounts();
  const [visible, setVisible] = React.useState(false);

  const getPaymentValue = async (value: string) => {
    const res = await handleTransfer(
      accounts[0],
      CASH_CARD_NUMBER,
      Number(value.trim())
    );

    if (res) setVisible(false);
  };

  return (
    <>
      <PaymentDialog
        visible={visible}
        onChangeValue={getPaymentValue}
        paymentOther={item}
      />
      <Pressable style={styles.root} onPress={() => setVisible(true)}>
        <BaseIcon iconName={item.iconName} />
        <Text style={styles.title}>{item.title}</Text>
      </Pressable>
    </>
  );
};

export default PaymentOtherItem;

const styles = StyleSheet.create({
  root: {
    width: 96,
    gap: 5,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    ...BOX_SHADOW.sm,
    borderRadius: 20,
    backgroundColor: colors.WHITE,
  },
  title: {
    fontSize: 15,
    color: colors.BLACK,
  },
});
