"use client";

import { useAppContext } from "../context/state";
import { Toggle } from "./Toggle";
useAppContext;
import Link from "next/link";

export function Navbar() {
  const { setSearch } = useAppContext();
  const resetSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <nav className="border-secondary-100 dark:bg-Primary-100 relative flex h-16 w-full items-center justify-between border-b bg-white px-8 py-4  shadow-sm  dark:border-none dark:text-white">
      <Link href={"/"} onClick={resetSearch}>
        <h1 className=" text-md font-bold  sm:text-2xl">Where in the world?</h1>
      </Link>
      <Toggle />
    </nav>
  );
}
