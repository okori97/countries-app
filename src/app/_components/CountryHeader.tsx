"use client";

import Image from "next/image";
import commaNumber from "comma-number";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import type { Country } from "~/types";
import { getCurrencies, getLanguages, getNativeName } from "~/utils/helpers";

countries.registerLocale(enLocale);

interface CountryHeaderProps {
  country?: Country;
}

export default function CountryHeader({ country }: CountryHeaderProps) {
  if (!country) return <div>Loading...</div>;

  const currencies = getCurrencies(country);
  const languages = getLanguages(country);
  const nativeName = getNativeName(country);

  return (
    <div className="flex w-full flex-row items-center gap-20">
      <div>
        {country?.flags ? (
          <Image src={country.flags.svg} alt="flag" width={500} height={50} />
        ) : (
          "N/A"
        )}
      </div>
      <div className="flex flex-col">
        <h1 className="mb-8 text-2xl font-bold">{country.name.common}</h1>

        <div className=" grid grid-cols-2 ">
          <p className="mb-3 text-sm">
            <span className="font-bold">Native Name: </span>
            {country && nativeName ? nativeName : "N/A"}
          </p>
          <p className="col-start-1 mb-3 text-sm">
            <span className="font-bold">Population: </span>
            {commaNumber(country.population)}
          </p>
          <p className="col-start-1 mb-3 text-sm">
            <span className="font-bold">Region: </span>
            {country.region}
          </p>
          <p className=" col-start-1 mb-3 text-sm">
            <span className="font-bold">Subregion: </span>
            {country.subregion}
          </p>
          <p className="col-start-1 mb-3 text-sm">
            <span className="font-bold">Capital: </span>
            {country.capital}
          </p>
          <p className="col-start-2 row-start-1 mb-3 text-sm">
            <span className="font-bold">Top Level Domain: </span>
            {country.tld}
          </p>
          <p className="col-start-2 row-start-2 mb-3 text-sm">
            <span className="font-bold">Currencies: </span>
            {currencies?.map((currency) => {
              return currency;
            })}
          </p>
          <p className="col-start-2 row-start-3 mb-3 text-sm">
            <span className="font-bold">Languages: </span>
            {languages && languages.length > 0 ? languages?.join(", ") : "N/A"}
          </p>
        </div>

        <div className="wrap mt-12 flex  flex-row flex-wrap items-center gap-2">
          <span className="font-bold">Border Countries: </span>
          {country.borders && country.borders.length > 0
            ? country.borders.map((border: string, index) => (
                <div
                  key={index}
                  className=" border px-5 py-1 text-sm shadow-sm"
                >
                  {countries.getName(border, "en")}
                </div>
              ))
            : "N/A"}
        </div>
      </div>
    </div>
  );
}
