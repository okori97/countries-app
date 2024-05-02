"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Country } from "../../../types";
import CountryHeader from "../../_components/CountryHeader";

import { getAll } from "~/utils/requests";

export default function DetailsPage() {
  const [country, setCountry] = useState<Country | undefined>(undefined);

  const { countryName } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAll({
          name: countryName as string,
          fullName: true,
        });
        if (!data) throw new Error("No data");

        setCountry(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData().catch((error) => {
      console.log(error);
    });
  }, [countryName]);
  return (
    <main className="h-full w-full">
      <CountryHeader country={country} />
    </main>
  );
}
