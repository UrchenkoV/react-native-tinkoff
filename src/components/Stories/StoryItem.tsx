import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { FC } from "react";
import { IStory } from "./types";
import { colors } from "../../styles";
import { useData } from "../../hooks/useData";

const StoryItem: FC<{ story: IStory }> = ({ story }) => {
  const { setActiveStories } = useData();

  return (
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View style={styles.root}>
        <ImageBackground
          style={styles.image}
          source={{ uri: story.images[0] }}
          resizeMode="cover"
        >
          <Text style={styles.title}>{story.title}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  root: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderColor: colors.ACCENT,
    borderWidth: 1,
    overflow: "hidden",
    padding: 2,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  title: {
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: "500",
    margin: 8,
  },
});
