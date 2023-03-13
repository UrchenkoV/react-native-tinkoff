import React, { FC } from "react";
import BaseButton from "../BaseButton";
import { asyncAlert } from "./asyncAlet";
import { useAuth } from "../../hooks/useAuth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { getRandomCardNumber } from "../../utils/getRandomCardNumber";

const AccountAddCard: FC = () => {
  const { user } = useAuth();

  const registerHandler = async () => {
    try {
      const currency = await asyncAlert({
        title: "Валюта",
        message: "Выберите валюту карты",
        buttons: {
          text: "RUB",
          resolveValue: "RUB",
          textSecond: "USD",
          resolveValueSecond: "USD",
        },
      });

      const cardType = await asyncAlert({
        title: "Тип карты",
        message: "Выберите тип карты",
        buttons: {
          text: "Black",
          resolveValue: "Tinkoff Black",
          textSecond: "All Airlines",
          resolveValueSecond: "Tinkoff All Airlines",
        },
      });

      addDoc(collection(db, "accounts"), {
        createdAt: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return <BaseButton value="Добавить карту" onPress={registerHandler} />;
};

export default AccountAddCard;
