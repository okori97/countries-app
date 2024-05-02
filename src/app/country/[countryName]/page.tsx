"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Country } from "../../../types";
import CountryHeader from "../../_components/CountryHeader";

import { getAll } from "~/utils/requests";
import { set } from "zod";

export default function DetailsPage() {
  const [country, setCountry] = useState<Country | Country[] | undefined>(
    undefined,
  );

  const { countryName } = useParams();
  console.log(useParams());

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAll({ name: countryName, fullName: true });
        setCountry({ data: data[0] });
        console.log(data, "data");
        console.log(country, " state");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <main className="h-full w-full">
      <CountryHeader country={country} />
    </main>
  );
}
