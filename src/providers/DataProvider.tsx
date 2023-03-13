import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
} from "react";

interface IContext {
  activeStories: string[] | null;
  setActiveStories: Dispatch<SetStateAction<string[] | null>>;
}

export const DataContext = createContext<IContext>({} as IContext);

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeStories, setActiveStories] = React.useState<string[] | null>(
    null
  );

  const value = React.useMemo(
    () => ({ activeStories, setActiveStories }),
    [activeStories, setActiveStories]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
