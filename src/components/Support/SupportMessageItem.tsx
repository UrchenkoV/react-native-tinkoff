import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { ISupportMessageItem } from "./types";
import { colors } from "../../styles";
import { useAuth } from "../../hooks/useAuth";

const SupportMessageItem: FC<{ message: ISupportMessageItem }> = ({
  message,
}) => {
  const { user } = useAuth();

  const isMessageByAuthUser = message.userId === user?.uid;

  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: isMessageByAuthUser
            ? colors.ACCENT
            : colors.GRAY_100,
          alignSelf: isMessageByAuthUser ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text
        style={{
          fontSize: 15,
          color: colors.GRAY_900,
          lineHeight: 20,
          flexShrink: 1,
        }}
      >
        {message.message}
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: colors.GRAY_600,
          alignSelf: "flex-end",
        }}
      >
        {typeof message.createdAt == "string" && message.createdAt}
      </Text>
    </View>
  );
};

export default SupportMessageItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
