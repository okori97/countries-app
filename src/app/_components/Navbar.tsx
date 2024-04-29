import { ToggleDarkMode } from "./ToggleDarkMode";

export function Navbar() {
  return (
    <nav className="border-secondary-100 flex h-16 w-full items-center justify-between border-b bg-white px-8 py-4  shadow-md">
      <h1 className=" text-2xl  font-bold">Where in the world?</h1>
      <ToggleDarkMode />
    </nav>
  );
}
