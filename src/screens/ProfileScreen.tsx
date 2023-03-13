import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useProfile } from "../hooks/useProfile";
import Layout from "../layouts/Layout";
import Header from "../components/Header";
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import BaseLoader from "../components/BaseLoader";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import BaseAlert from "../components/BaseAlert";

export default function ProfileScreen() {
  const { isLoading: isProfileLoading, name, setName, profile } = useProfile();

  const { isLoading, isSuccess, updateProfile } = useUpdateProfile();

  return (
    <Layout>
      <View style={styles.root}>
        <Header title="Профиль" />
        <View style={styles.wrap}>
          {isSuccess && <BaseAlert text="Изменения сохранены." />}

          {isProfileLoading || isLoading ? (
            <BaseLoader />
          ) : (
            <>
              <BaseInput onChange={setName} value={name} placeholder="Имя" />
              <BaseButton
                onPress={() => updateProfile(name, profile.docId)}
                value="Сохранить"
              />
            </>
          )}
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },
  wrap: {
    marginTop: 20,
    gap: 20,
  },
});
