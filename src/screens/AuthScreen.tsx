import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../styles";
import { useAuth } from "../hooks/useAuth";
import BaseButton from "../components/BaseButton";
import BaseLoader from "../components/BaseLoader";
import BaseInput from "../components/BaseInput";

interface IData {
  email: string;
  password: string;
}

export default function AuthScreen() {
  const { isLoading, login, register } = useAuth();
  const [isLogin, setIsLogin] = React.useState(true);
  const [data, setData] = React.useState<IData>({
    email: "vlad@mail.ru",
    password: "123456",
  } as IData);

  const onSubmit = () => {
    const { email, password } = data;

    if (isLogin) login(email, password);
    else register(email, password);
  };

  return (
    <View style={[styles.root]}>
      <View style={{ width: "100%", gap: 20 }}>
        <Text style={styles.title}>{isLogin ? "Войти" : "Регистрация"}</Text>

        {isLoading ? (
          <BaseLoader />
        ) : (
          <>
            <BaseInput
              onChange={(val) => setData({ ...data, email: val })}
              value={data.email}
              placeholder="Почта"
            />
            <BaseInput
              onChange={(val) => setData({ ...data, password: val })}
              value={data.password}
              placeholder="Пароль"
              isSecure
            />

            <BaseButton
              onPress={onSubmit}
              value={isLogin ? "Войти" : "Зарегистрироваться"}
            />

            <Pressable onPress={() => setIsLogin((old) => !old)}>
              <Text style={styles.link}>
                {isLogin ? "Зарегистрироваться" : "Войти"}
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    fontSize: 16,
    color: colors.BLACK,
    backgroundColor: colors.ACCENT,
    padding: 15,
    borderRadius: 15,
    textAlign: "center",
  },
  link: {
    fontSize: 16,
    color: colors.TEXT_GRAY,
    alignSelf: "flex-end",
  },
});
