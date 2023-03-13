import { StyleSheet, TextInput } from "react-native";
import React, { FC } from "react";
import { colors } from "../styles";

interface IBaseInput {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
}

const BaseInput: FC<IBaseInput> = ({
  onChange,
  value,
  placeholder,
  isSecure,
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.BLACK}
      secureTextEntry={isSecure}
    />
  );
};

export default BaseInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: colors.BLACK,
    backgroundColor: colors.BG_GRAY,
    borderRadius: 15,
    padding: 15,
  },
});
