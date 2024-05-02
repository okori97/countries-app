import { Toggle } from "./Toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-secondary-100 dark:bg-Primary-100 flex h-16 w-full items-center justify-between border-b bg-white px-8 py-4 shadow-md  dark:border-none dark:text-white">
      <Link href={"/"}>
        <h1 className=" text-2xl  font-bold">Where in the world?</h1>
      </Link>
      <Toggle />
    </nav>
  );
}
