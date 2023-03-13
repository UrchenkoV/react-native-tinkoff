import { useAuth } from "./useAuth";
import React from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const useUpdateProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const updateProfile = async (name: string, docId: string) => {
    if (!user) return;

    setIsLoading(true);

    try {
      const docRef = doc(db, "users", docId);

      await updateDoc(docRef, { name });

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err: any) {
      console.warn(err);
    }
    setIsLoading(false);
  };

  const value = React.useMemo(
    () => ({
      isLoading,
      isSuccess,
      updateProfile,
    }),
    [isLoading, isSuccess]
  );

  return value;
};
