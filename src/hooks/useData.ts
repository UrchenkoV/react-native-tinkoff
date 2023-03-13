import React from "react";
import { DataContext } from "../providers/DataProvider";

export const useData = () => React.useContext(DataContext);
