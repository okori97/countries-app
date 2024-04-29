import Image from "next/image";
import darkModeIcon from "../../../public/images/icon-dark-mode.svg";

export function ToggleDarkMode() {
  return (
    <button className="cursor-pointer">
      <div className="flex flex-row items-center gap-2">
        <Image
          className=" h-4"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={darkModeIcon}
          alt="dark mode"
          height="20"
          width="15"
        />
        <p>Dark Mode</p>
      </div>
    </button>
  );
}
