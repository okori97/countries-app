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
      <div className="dark:bg-Primary-100  sm:w-70 flex w-full flex-col overflow-hidden rounded-[5px] bg-white shadow-md dark:text-white">
        <Link
          href={`/country/${country.name.common}`}
          className="h-full w-full"
        >
          <Image
            className="h-[160px] w-full object-cover"
            src={country.flags.svg}
            alt="flag"
            width={200}
            height={50}
          />
          <section className="px-8 py-10 text-sm">
            <p className="mb-4 text-base font-bold">{country.name.common}</p>
            <p className="">
              <span className="mb-4 ">Population: </span>
              <span className="text-gray-700 dark:text-gray-300">
                {commaNumber(country.population)}
              </span>
            </p>
            <p className="">
              <span className="mb-4 ">Region: </span>
              <span className="text-gray-700 dark:text-gray-300">
                {country.region}
              </span>
            </p>
            <p className="">
              <span className="mb-4 ">Capital: </span>
              <span className="text-gray-700 dark:text-gray-300">
                {country.capital}
              </span>
            </p>
          </section>
        </Link>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
