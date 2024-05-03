"use client";
import type { Country } from "~/types";

export const getNativeName = (data: Country) => {
  const name: {
    common: string;
    official: string;
    nativeName: object;
  } = data.name;
  const nativeNames: { common: string }[] | undefined = Object.values(
    name.nativeName,
  );

  const result: string | undefined =
    nativeNames?.[nativeNames.length - 1]?.common;

  return result;
};

export const getCurrencies = (data: Country): string[] => {
  const currencies = Object.values(data.currencies as unknown as object);
  const result: string[] = [];
  currencies.map((currency: { name: string }) => {
    result.push(currency.name);
  });
  return result;
};

export const getLanguages = (data: Country): string[] => {
  const languages = Object.values(data.languages);
  const result: string[] = [];
  languages.map((language) => {
    result.push(language);
  });
  return result;
};
