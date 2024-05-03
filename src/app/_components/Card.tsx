import Image from "next/image";
import Link from "next/link";
import type { Country } from "../../types";
import commaNumber from "comma-number";

interface CardProps {
  country: Country;
}

export default function Card(props: CardProps) {
  const { country } = props;

  if (country) {
    return (
      <div className="dark:bg-Primary-100 m flex w-60  flex-col overflow-hidden rounded-[5px] bg-white shadow-md dark:text-white">
        <Link
          href={`/country/${country.name.common}`}
          className="h-full w-full"
        >
          <Image
            className="h-[140px] w-full object-cover"
            src={country.flags.svg}
            alt="flag"
            width={200}
            height={50}
          />
          <section className="px-4 py-8">
            <p className="mb-4 font-bold">{country.name.common}</p>
            <p className="text-sm">
              <span className="font-bold">Population: </span>
              {commaNumber(country.population)}
            </p>
            <p className="text-sm">
              <span className="font-bold">Region: </span>
              {country.region}
            </p>
            <p className="text-sm">
              <span className="font-bold">Capital: </span>
              {country.capital}
            </p>
          </section>
        </Link>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
