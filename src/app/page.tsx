"use client";

import { Search } from "./_components/Search";
import { Filter } from "./_components/Filter";
import Card from "./_components/Card";
import { useEffect, useState } from "react";
import { getAll } from "../utils/requests";
import type { Country } from "../utils/requests";

export default function HomePage() {
  const [countries, setCountries] = useState<Country[] | undefined>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAll();
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <main className="px-8 py-8">
      <section className="mb-8 flex w-full flex-row items-center justify-between">
        <Search />
        <Filter />
      </section>
      <section className="flex w-full flex-row flex-wrap items-center justify-between gap-y-12 ">
        {countries.length > 0 &&
          countries?.map((country, index) => {
            return <Card key={index} country={country} />;
          })}
      </section>
    </main>
  );
}
