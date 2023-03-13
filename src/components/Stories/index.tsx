import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useStories } from "./useStories";
import BaseLoader from "../BaseLoader";
import StoryItem from "./StoryItem";

const Stories = () => {
  const { stories, isLoading } = useStories();

  return (
    <View style={styles.root}>
      {isLoading ? (
        <BaseLoader />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map((story) => (
            <StoryItem key={story.id} story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  root: {
    paddingLeft: 20,
  },
});
