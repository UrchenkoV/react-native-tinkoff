import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import { useAuth } from "../../hooks/useAuth";
import { IProfile } from "../../hooks/useProfile";
import { IPaymentContact } from "./types";

export const usePaymentContacts = () => {
  const { user } = useAuth();
  const [contacts, setContacts] = React.useState<IPaymentContact[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    onSnapshot(
      query(collection(db, "accounts"), where("userId", "!=", user?.uid)),
      async (snapshot) => {
        const dataContacts = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const data = doc.data() as IPaymentContact & {
              userId: string;
            };

            let displayName = "";

            const q = query(
              collection(db, "users"),
              where("id", "==", data.userId)
            );

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
              displayName = (doc.data() as IProfile).name;
            });

            return {
              //@ts-ignore
              id: doc.id,
              //@ts-ignore
              displayName,
              ...data,
            };
          })
        );

        const uniqueUsers = dataContacts.filter(
          (val, i, arr) => arr.findIndex((v) => val.userId === v.userId) === i
        );

        setContacts(uniqueUsers);
        setIsLoading(false);
      }
    );
  }, []);

  const value = React.useMemo(
    () => ({
      contacts,
      isLoading,
    }),
    [contacts, isLoading]
  );

  return value;
};
