import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { IPaymentContact } from "./types";
import { colors } from "../../styles";
import BaseAvatar from "../BaseAvatar";
import { handleTransfer } from "./handleTransfer";
import { useAccounts } from "../Accounts/useAccounts";
import PaymentDialog from "./PaymentDialog";

const PaymentContactItem: React.FC<{
  contact: IPaymentContact & { displayName: string };
}> = ({ contact }) => {
  const { accounts } = useAccounts();
  const [visible, setVisible] = React.useState(false);

  const getPaymentValue = async (value: string) => {
    const res = await handleTransfer(
      accounts[0],
      contact.cardNumber,
      Number(value.trim())
    );

    if (res) setVisible(false);
  };

  return (
    <>
      <PaymentDialog
        visible={visible}
        onChangeValue={getPaymentValue}
        contact={contact}
      />
      <Pressable style={styles.root} onPress={() => setVisible(true)}>
        <BaseAvatar size="large" name={contact.displayName} />
        <Text style={styles.name}>{contact.displayName}</Text>
      </Pressable>
    </>
  );
};

export default PaymentContactItem;

const styles = StyleSheet.create({
  root: {
    gap: 5,
    alignItems: "center",
    marginRight: 15,
  },
  name: {
    color: colors.GRAY_500,
    fontSize: 16,
    fontWeight: "500",
  },
});
