import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { IAccount } from "./types";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../styles";

const AccountItem: React.FC<{ account: IAccount }> = ({ account }) => {
  const cardBlack: ImageSourcePropType = require("../../../assets/black.png");
  const cardAllAirline: ImageSourcePropType = require("../../../assets/all-airlines.png");

  return (
    <View style={styles.root}>
      <View style={styles.currency}>
        <FontAwesome
          name={account.currency === "RUB" ? "ruble" : "usd"}
          size={24}
          color={colors.GRAY_700}
        />
      </View>
      <View style={styles.descWrap}>
        <Text style={styles.balance}>
          {Intl.NumberFormat(undefined, {
            currency: account.currency,
            style: "currency",
          }).format(account.balance)}
        </Text>
        <Text style={styles.cardType}>{account.name}</Text>
      </View>

      <ImageBackground
        source={account.name === "Tinkoff Black" ? cardBlack : cardAllAirline}
        style={styles.imageCard}
        resizeMode="contain"
      >
        <Text style={styles.imageCardNumber}>
          {account.cardNumber.slice(-4)}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default AccountItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  descWrap: {
    gap: 5,
  },
  currency: {
    width: 50,
    height: 50,
    backgroundColor: colors.WHITE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  cardType: {
    fontSize: 16,
    color: colors.GRAY_700,
  },
  balance: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.BLACK,
  },
  imageCard: {
    width: 55,
    height: 40,
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
  imageCardNumber: {
    color: colors.WHITE,
    fontSize: 11,
    fontWeight: "700",
    margin: 5,
  },
});
