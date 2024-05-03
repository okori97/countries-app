"use client";

import Image from "next/image";
import commaNumber from "comma-number";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import BorderChip from "./BorderChip";
import type { Country } from "~/types";
import { getCurrencies, getLanguages, getNativeName } from "~/utils/helpers";

countries.registerLocale(enLocale);

interface CountryHeaderProps {
  country?: Country;
}

export default function CountryHeader({ country }: CountryHeaderProps) {
  if (!country) return <div className="dark:text-white">Loading...</div>;

  const currencies = getCurrencies(country);
  const languages = getLanguages(country);
  const nativeName = getNativeName(country);

  return (
    <div className="flex w-full flex-col gap-12 sm:flex-row sm:items-center sm:gap-20">
      <div>
        {country?.flags ? (
          <Image
            src={country.flags.svg}
            alt="flag"
            width={500}
            height={50}
            className="sm:h-auto sm:w-[500px] sm:min-w-[500px]"
          />
        ) : (
          "N/A"
        )}
      </div>
      <div className="flex flex-col">
        <h1 className="mb-6 text-2xl font-bold dark:text-white">
          {country.name.common}
        </h1>

        <div className="flex w-full flex-col items-start gap-y-0 sm:grid  sm:grid-cols-2">
          <p className="dark:text-secondary-100 mb-3 text-sm">
            <span className="dark:text-white">Native Name: </span>
            <span className="  text-gray-700 dark:text-gray-300">
              {country && nativeName ? nativeName : "N/A"}
            </span>
          </p>
          <p className="col-start-1 mb-3 text-sm dark:text-white">
            <span className="opacity-100 dark:text-white">Population: </span>
            <span className="  text-gray-700 dark:text-gray-300">
              {commaNumber(country.population)}
            </span>
          </p>
          <p className="col-start-1 mb-3 text-sm dark:text-white">
            <span className="opacity-100 dark:text-white">Region: </span>
            <span className="  text-gray-700 dark:text-gray-300">
              {country.region}
            </span>
          </p>
          <p className=" col-start-1 mb-3 text-sm dark:text-white">
            <span className="opacity-100 dark:text-white">Subregion: </span>
            <span className="  text-gray-700 dark:text-gray-300">
              {country.subregion}
            </span>
          </p>
          <p className="col-start-1 mb-16 text-sm sm:mb-3 dark:text-white">
            <span className="opacity-100 dark:text-white">Capital: </span>
            <span className="  text-gray-700 dark:text-gray-300">
              {country.capital}
            </span>
          </p>
          <p className="col-start-2 row-start-1 mb-3 text-sm dark:text-white">
            <span className="opacity-100 dark:text-white">
              Top Level Domain:{" "}
            </span>
            <span className="  text-gray-700 dark:text-gray-300">
              {country.tld}
            </span>
          </p>
          <p className="col-start-2 row-start-2 mb-3 text-sm dark:text-white">
            <span className="opacity-100 dark:text-white">Currencies: </span>
            <span className="  text-gray-700 dark:text-gray-300">
              {currencies?.map((currency) => {
                return currency;
              })}
            </span>
          </p>
          <p className="col-start-2 row-start-3 mb-3 text-sm dark:text-white">
            <span className=" opacity-100">Languages: </span>
            <span className="  text-gray-700 dark:text-gray-300">
              {languages && languages.length > 0
                ? languages?.join(", ")
                : "N/A"}
            </span>
          </p>
        </div>

        <div className="wrap mt-12 flex flex-wrap items-center gap-2 sm:flex-row">
          <span className="w-full font-bold sm:w-auto dark:text-white">
            Border Countries:{" "}
          </span>
          {country.borders && country.borders.length > 0
            ? country.borders.map((border: string, index) => (
                <BorderChip
                  border={countries.getName(border, "en")}
                  key={index}
                />
              ))
            : "N/A"}
        </div>
      </div>
    </div>
  );
}
