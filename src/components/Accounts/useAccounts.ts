import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import { useAuth } from "../../hooks/useAuth";
import { IAccount } from "./types";

export const useAccounts = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = React.useState(false);
  const [accounts, setAccounts] = React.useState<IAccount[]>([]);

  React.useEffect(() => {
    setIsLoading(true);

    onSnapshot(
      query(collection(db, "accounts"), where("userId", "==", user?.uid)),
      (snapshot) => {
        const docs = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as IAccount)
        );

        setAccounts(docs);
        setIsLoading(false);
      }
    );
  }, []);

  const value = React.useMemo(
    () => ({ isLoading, accounts }),
    [isLoading, accounts]
  );

  return value;
};
