"use client";
import { useAppContext } from "../context/state";

export function Filter() {
  const { setRegion } = useAppContext();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };
  return (
    <div className="dark:bg-Primary-100 flex max-w-96 flex-row items-center border  p-4 text-sm shadow-md dark:border-none dark:text-white">
      <select
        name="Region"
        className="dark:bg-Primary-100 pr-5"
        id="region"
        onChange={handleChange}
      >
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
