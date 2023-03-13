import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import { useAuth } from "./useAuth";

export interface IProfile {
  id: string;
  name: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = React.useState(true);
  const [profile, setProfile] = React.useState<IProfile>({} as IProfile);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    onSnapshot(
      query(collection(db, "users"), where("id", "==", user?.uid), limit(1)),
      (snapshot) => {
        const profile = snapshot.docs.map((doc) => ({
          ...(doc.data() as Omit<IProfile, "docId">),
          docId: doc.id,
        }))[0];

        setProfile(profile);
        setName(profile.name);
        setIsLoading(false);
      }
    );
  }, []);

  const value = React.useMemo(
    () => ({ isLoading, profile, name, setName }),
    [isLoading, profile, name]
  );

  return value;
};
