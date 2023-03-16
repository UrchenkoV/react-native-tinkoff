import { View, ScrollView, StyleSheet } from "react-native";
import React, { FC } from "react";
import Layout from "../layouts/Layout";
import SupportHeader from "../components/Support/SupportHeader";
import SupportMessageSend from "../components/Support/SupportMessageSend";
import SupportMessageItem from "../components/Support/SupportMessageItem";
import { useSupportMessages } from "../components/Support/useSupportMessages";

const SupportScreen: FC = () => {
  const { messages } = useSupportMessages();

  return (
    <Layout isScrollView={false}>
      <View style={styles.root}>
        <SupportHeader />
        <ScrollView style={{ marginBottom: 0, gap: 20 }}>
          {messages.map((obj) => (
            <SupportMessageItem key={obj.id} message={obj} />
          ))}
        </ScrollView>
        <SupportMessageSend />
      </View>
    </Layout>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
