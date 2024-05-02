"use client";

import Image from "next/image";
import { useAppContext } from "../context/state";
import darkModeIcon from "../../../public/images/icon-dark-mode.svg";

export function Toggle() {
  const { darkMode, setDarkMode } = useAppContext();

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="cursor-pointer">
      <div
        className="flex flex-row items-center gap-2 dark:text-white"
        onClick={handleClick}
      >
        <Image
          className=" "
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={darkModeIcon}
          alt="dark mode"
          height="20"
          width="15"
        />
        {darkMode == false ? <p>Dark Mode</p> : <p>Light Mode</p>}
      </div>
    </button>
  );
}
