import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import BaseAvatar from "./BaseAvatar";
import LogoutButton from "./LogoutButton";
import { colors } from "../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useProfile } from "../hooks/useProfile";
import BaseLoader from "./BaseLoader";

interface IHeader {
  title?: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { isLoading, name } = useProfile();

  return isLoading ? (
    <BaseLoader />
  ) : (
    <View style={styles.root}>
      {route.name === "Home" ? (
        <Image
          source={{
            uri: "https://static.tildacdn.com/tild3364-3836-4339-a365-396335393236/tinkoff.png",
          }}
          style={styles.logo}
        />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}

      <View style={styles.profileWrap}>
        <TouchableOpacity
          style={styles.profileWrap}
          onPress={() => navigate("Profile")}
        >
          <BaseAvatar
            name={name}
            size="small"
            image="https://img.icons8.com/windows/256/user.png"
          />
        </TouchableOpacity>

        {route.name === "Profile" && <LogoutButton />}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 130,
    height: 55,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.BLACK,
  },

  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
