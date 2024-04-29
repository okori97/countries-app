"use client";

import { Search } from "./_components/Search";
import { Filter } from "./_components/Filter";
import Card from "./_components/Card";
import { use, useEffect } from "react";
import { getAll } from "../utils/requests";
import { useAppContext } from "./context/state";

export default function HomePage() {
  const { countries, setCountries, region, search, darkMode } = useAppContext();
  console.log;
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
    function checkDarkMode() {
      if (darkMode == true) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    checkDarkMode();
  }, [darkMode]);

  return (
    <main className="dark:bg-Primary-200 px-8 py-8">
      <section className="mb-8 flex w-full flex-row items-center justify-between">
        <Search />
        <Filter />
      </section>
      <section className="flex w-full flex-row flex-wrap items-center justify-between gap-y-12 ">
        {countries &&
          countries.length > 0 &&
          countries?.map((country, index) => {
            return <Card key={index} country={country} />;
          })}
      </section>
    </main>
  );
}
