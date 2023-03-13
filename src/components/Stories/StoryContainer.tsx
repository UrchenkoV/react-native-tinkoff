import React from "react";
// @ts-ignore
import { StoryContainer as SC } from "react-native-stories-view";
import { useData } from "../../hooks/useData";

const StoryContainer: React.FC = () => {
  const { activeStories, setActiveStories } = useData();

  return (
    activeStories && (
      <SC
        visible={true}
        enableProgress={true}
        images={activeStories}
        duration={20}
        onComplete={() => setActiveStories(null)}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
      />
    )
  );
};

export default StoryContainer;
