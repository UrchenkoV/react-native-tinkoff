import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import BaseInput from "../BaseInput";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../hooks/useAuth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const SupportMessageSend: React.FC = () => {
  const { user } = useAuth();

  const [message, setMessage] = React.useState("");

  const sendMessage = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        message,
        userId: user?.uid,
        createdAt: serverTimestamp(),
      });

      setMessage("");
    } catch (error) {
      Alert.alert("Ой, произошла ошибка!");
    }
  };
  return (
    <View style={styles.root}>
      <View style={{ flex: 1 }}>
        <BaseInput onChange={setMessage} value={message} placeholder="..." />
      </View>

      <TouchableOpacity onPress={sendMessage}>
        <Feather name="send" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SupportMessageSend;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
