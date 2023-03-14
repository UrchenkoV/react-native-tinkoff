import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IServiceItem } from "./types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../styles";
import ServiceItemPercent from "./ServiceItemPercent";
import { getRandomGradient } from "./getRandomGradient";

const ServiceItem: React.FC<{ item: IServiceItem }> = ({ item }) => {
  return (
    <View style={styles.root}>
      <View style={styles.iconWrap}>
        <LinearGradient colors={getRandomGradient()} style={styles.icon}>
          <ServiceItemPercent percent={item.percent} />
          <MaterialIcons name={item.iconName} size={30} color={colors.WHITE} />
        </LinearGradient>
      </View>

      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 70,
    gap: 5,
    alignItems: "center",
  },
  iconWrap: {
    width: "100%",
    height: 70,
    borderRadius: 15,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    color: colors.BLACK,
  },
});

export default ServiceItem;
