import { onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { FC, PropsWithChildren } from "react";
import { auth, db, login, logout, register } from "../firebase";

interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = React.createContext<IContext>({} as IContext);

export const AuthProvder: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setUser(user || null);
        setIsLoadingInitial(false);
      }),
    []
  );

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, "users"), {
        id: user.uid,
        name: "Без имени",
      });

      setUser(user);
    } catch (err: any) {
      console.log(err, "registerHandler");
    }
    setIsLoading(false);
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await login(email, password);
      setUser(user);
    } catch (err: any) {
      console.log(err, "loginHandler");
    }
    setIsLoading(false);
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
      setUser(null);
    } catch (err: any) {
      console.log(err, "Error logout!");
    }
    setIsLoading(false);
  };

  const value = React.useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      register: registerHandler,
      logout: logoutHandler,
    }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
