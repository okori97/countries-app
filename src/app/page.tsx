"use client";

import { Search } from "./_components/Search";
import { Filter } from "./_components/Filter";
import Card from "./_components/Card";
import { useEffect } from "react";
import { getAll } from "../utils/requests";
import { useAppContext } from "./context/state";

export default function HomePage() {
  const { countries, setCountries, region, search } = useAppContext();
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

  return (
    <main className="dark:bg-Primary-200 ">
      <section className="mb-8 flex w-full flex-col items-start justify-between gap-y-10 sm:flex-row sm:items-center">
        <Search />
        <Filter />
      </section>
      <section className="flex w-full flex-row flex-wrap items-center justify-center gap-y-12 sm:justify-between ">
        {countries &&
          countries.length > 0 &&
          countries?.map((country, index) => {
            return <Card key={index} country={country} />;
          })}
      </section>
    </main>
  );
}
