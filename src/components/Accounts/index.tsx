import { View, Text, StyleSheet } from "react-native";
import React, { FC, Fragment } from "react";
import { useAccounts } from "./useAccounts";
import BaseLoader from "../BaseLoader";
import AccountItem from "./AccountItem";
import { colors } from "../../styles";
import AccountAddCard from "./AccountAddCard";

const Accounts: FC = () => {
  const { accounts, isLoading } = useAccounts();

  return (
    <View style={styles.root}>
      <View style={styles.innerWrap}>
        <Text style={styles.title}>Карты</Text>

        {isLoading ? (
          <BaseLoader />
        ) : accounts.length ? (
          accounts.map((obj) => <AccountItem key={obj.id} account={obj} />)
        ) : (
          <Text style={styles.noCard}>У вас нет карт.</Text>
        )}
        <AccountAddCard />
      </View>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },
  innerWrap: {
    backgroundColor: colors.GRAY_100,
    padding: 15,
    borderRadius: 20,
    gap: 25,
  },
  title: {
    fontSize: 20,
    color: colors.GRAY_700,
  },
  noCard: {
    color: colors.BLACK,
    fontSize: 19,
    textAlign: "center",
  },
});
