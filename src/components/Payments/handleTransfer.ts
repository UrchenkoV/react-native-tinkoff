import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "../../firebase";
import { IAccount } from "../Accounts/types";

export const handleTransfer = async (
  fromAccount: IAccount,
  cardNumber: string,
  sum: number
) => {
  try {
    let accountToId = "";
    let cardToBalance = "";

    const querySnapshot = await getDocs(
      query(
        collection(db, "accounts"),
        where("cardNumber", "==", cardNumber),
        limit(1)
      )
    );

    querySnapshot.docs.forEach((doc) => {
      accountToId = doc.id;
    });

    const docRefTo = doc(db, "accounts", accountToId);
    const docSnapTo = await getDoc(docRefTo);

    if (docSnapTo.exists()) {
      cardToBalance = docSnapTo.data().balance;
    } else {
      Alert.alert("Карта куда хотите сделать перевод не найдена.");
      return;
    }

    await updateDoc(docRefTo, {
      balance: cardToBalance + Number(sum),
    });

    const docRefFrom = doc(db, "accounts", fromAccount.id);

    await updateDoc(docRefFrom, {
      balance: fromAccount.balance - Number(sum),
    });

    Alert.alert("Успешный перевод.");

    return true;
  } catch (error: any) {
    console.error(error);
    Alert.alert("Увы, произошла ошибка.");
    return false;
  }
};
