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
};

export interface State {
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  countries: Country[] | undefined;
  setCountries: Dispatch<SetStateAction<Country[] | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<State>(initialState);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState<Country[] | undefined>(undefined);
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider
      value={{ region, setRegion, countries, setCountries, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
