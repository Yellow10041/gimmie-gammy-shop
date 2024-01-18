import { createContext } from "react";

interface IMainContextProps {
  [key: string]: any;
}

export const MainContext = createContext<IMainContextProps>({});
