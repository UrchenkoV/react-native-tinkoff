import React from "react";
import { Alert } from "react-native";

export interface IAsyncAlertButton {
  text: string;
  resolveValue: string;
  textSecond: string;
  resolveValueSecond: string;
}

export interface IAsyncAlert {
  title: string;
  message?: string;
  buttons: IAsyncAlertButton;
}

export const asyncAlert = async ({ title, message, buttons }: IAsyncAlert) =>
  new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: buttons.text,
          onPress: () => {
            resolve(buttons.resolveValue);
          },
        },
        {
          text: buttons.textSecond,
          onPress: () => {
            resolve(buttons.resolveValueSecond);
          },
        },
      ],
      { cancelable: false }
    );
  });
