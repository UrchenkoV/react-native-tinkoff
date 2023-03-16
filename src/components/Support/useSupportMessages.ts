import dayjs from "dayjs";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import { ISupportMessageItem } from "./types";

export const useSupportMessages = () => {
  const [messages, setMessages] = React.useState<ISupportMessageItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    onSnapshot(
      query(collection(db, "messages"), orderBy("createdAt", "asc")),
      (snapshot) => {
        const data = snapshot.docs.map((doc) =>
          doc.data().createdAt
            ? ({
                id: doc.id,
                ...doc.data(),
                createdAt: dayjs
                  .unix(doc.data()?.createdAt?.seconds)
                  .format("HH:mm"),
              } as ISupportMessageItem)
            : ({
                id: doc.id,
                ...doc.data(),
              } as ISupportMessageItem)
        );
        setMessages(data);
        setIsLoading(false);
      }
    );
  }, []);

  const value = React.useMemo(
    () => ({ messages, isLoading }),
    [messages, isLoading]
  );

  return value;
};
