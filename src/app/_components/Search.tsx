"use client";

import { useAppContext } from "../context/state";
import { useEffect } from "react";

export function Search() {
  const { setSearch } = useAppContext();

  useEffect(() => {
    setSearch("");
  }, [setSearch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query: string = formData.get("search") as string;
    setSearch(query);
  };
  return (
    <form
      name="search"
      className="dark:bg-Primary-100  flex w-96 flex-row items-center gap-4  border px-5 py-1 text-sm shadow-md dark:border-none"
      onSubmit={handleSubmit}
    >
      <button className=" ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="grey"
          className=" h-8 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        className="dark:bg-Primary-100 dark:autofill:text-white! h-10 w-full outline-none 
 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] focus:bg-inherit dark:text-white dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(43,57,69)]"
        type="text"
        name="search"
        placeholder="Search"
      />
    </form>
  );
}
