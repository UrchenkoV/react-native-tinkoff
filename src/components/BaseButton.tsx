import { Text, TouchableHighlight } from "react-native";
import React, { FC } from "react";
import { colors as styleColors } from "../styles";

interface IBaseButton {
  onPress: () => void;
  value: string;
  colors?: [string, string];
}

const color = styleColors.ACCENT;
const colorActive = styleColors.ACCENT_TO;

const BaseButton: FC<IBaseButton> = ({
  onPress,
  value,
  colors = [color, colorActive],
}) => {
  return (
    <TouchableHighlight
      underlayColor={colors[1]}
      onPress={onPress}
      style={{
        backgroundColor: colors[0],
        padding: 15,
        borderRadius: 15,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: styleColors.BLACK,
          textAlign: "center",
        }}
      >
        {value}
      </Text>
    </TouchableHighlight>
  );
};

export default BaseButton;
