import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { colors } from "../styles";

interface IBaseAvatar {
  name?: string;
  size?: "small" | "large";
  image?: string;
}
const BaseAvatar: FC<IBaseAvatar> = ({ name, size, image }) => {
  const isSmall = size === "small";

  return (
    <View
      style={{
        width: isSmall ? 40 : 50,
        height: isSmall ? 40 : 50,
        backgroundColor: colors.BG_GRAY,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {image ? (
        <Image
          source={{ uri: image }}
          style={{
            width: isSmall ? 40 : 50,
            height: isSmall ? 40 : 50,
            borderRadius: 50,
          }}
        />
      ) : (
        <Text
          style={{
            color: colors.BLACK,
            fontSize: isSmall ? 25 : 30,
            fontWeight: "700",
          }}
        >
          {name?.slice(0, 1)}
        </Text>
      )}
    </View>
  );
};

export default BaseAvatar;
