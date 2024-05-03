"use client";

import { Search } from "./_components/Search";
import { Filter } from "./_components/Filter";
import Card from "./_components/Card";
import { useEffect } from "react";
import { getAll } from "../utils/requests";
import { useAppContext } from "./context/state";

export default function HomePage() {
  const { countries, setCountries, region, search, setSearch } =
    useAppContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAll({ region, name: search });
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData().catch((error) => {
      console.log(error);
    });
  }, [region, search, setCountries]);

  useEffect(() => {
    setSearch("");
  }, []);

  return (
    <main className="dark:bg-Primary-200 ">
      <section className="mb-8 flex w-full flex-col items-start justify-between gap-y-10 sm:flex-row sm:items-center">
        <Search />
        <Filter />
      </section>
      <section className="grid w-full grid-cols-1 items-end justify-center gap-y-12 px-10 sm:grid-cols-4 sm:justify-between sm:gap-24 sm:px-0">
        {countries &&
          countries.length > 0 &&
          countries?.map((country, index) => {
            return <Card key={index} country={country} />;
          })}
      </section>
    </main>
  );
}
