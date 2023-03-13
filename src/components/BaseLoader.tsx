import { ActivityIndicator } from "react-native";
import React from "react";
import { colors } from "../styles";

const BaseLoader = () => {
  return <ActivityIndicator size="large" color={colors.ACCENT} />;
};

export default BaseLoader;
