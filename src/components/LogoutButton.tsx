import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";
import { colors } from "../styles";

const LogoutButton: FC = () => {
  const { logout } = useAuth();

  return (
    <View>
      <TouchableOpacity onPress={logout}>
        <AntDesign name="logout" size={20} color={colors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
