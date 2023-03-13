import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import { IStory } from "./types";
import { db } from "../../firebase";

export const useStories = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [stories, setStories] = React.useState<IStory[]>([]);

  React.useEffect(() => {
    onSnapshot(
      query(collection(db, "stories"), orderBy("created_at", "asc")),
      (snapshot) => {
        setIsLoading(true);
        const docs = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as IStory)
        );

        setStories(docs);
        setIsLoading(false);
      }
    );
  }, []);

  const value = React.useMemo(
    () => ({ isLoading, stories }),
    [isLoading, stories]
  );

  return value;
};
