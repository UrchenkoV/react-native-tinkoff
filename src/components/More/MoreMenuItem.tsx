import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { FC } from "react";
import { IMoreMenuItem } from "./types";
import { BOX_SHADOW, colors } from "../../styles";
import { AntDesign } from "@expo/vector-icons";

const MoreMenuItem: FC<{ item: IMoreMenuItem }> = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => Linking.openURL(item.link)}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.icon}>
        <AntDesign name={item.iconName} size={25} color={colors.WHITE} />
      </View>
    </TouchableOpacity>
  );
};

export default MoreMenuItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.WHITE,
    ...BOX_SHADOW.sm,
    padding: 20,
    borderRadius: 15,
  },
  content: {
    width: "70%",
    gap: 5,
    flexShrink: 0,
  },
  title: {
    color: colors.GRAY_800,
    fontSize: 20,
    fontWeight: "600",
    flexShrink: 0,
  },
  description: {
    color: colors.GRAY_600,
    fontSize: 16,
    flexShrink: 0,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.ACCENT,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
