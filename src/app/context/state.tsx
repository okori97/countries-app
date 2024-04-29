"use client";
import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { Country } from "../../utils/requests";

const initialState: State = {
  region: "",
  setRegion: (): string => "",
  countries: [],
  setCountries: (): Country[] | undefined => [],
  search: "",
  setSearch: (): string => "",
  darkMode: false,
  setDarkMode: (): boolean => false,
};

export interface State {
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  countries: Country[] | undefined;
  setCountries: Dispatch<SetStateAction<Country[] | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<State>(initialState);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState<Country[] | undefined>(undefined);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContext.Provider
      value={{
        region,
        setRegion,
        countries,
        setCountries,
        search,
        setSearch,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
