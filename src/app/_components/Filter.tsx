"use client";
import { useAppContext } from "../context/state";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export function Filter() {
  const { setRegion } = useAppContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    let value: string = target.innerHTML;
    const selected: HTMLElement = document.getElementById("selecteditem")!;

    if (value == selected?.innerHTML) {
      value = "";
      selected.innerHTML = "Filter By Region";
      setRegion("");
    } else {
      selected.innerHTML = value;
      setRegion(value);
    }
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpen(!open);
    const menu: HTMLElement = document.getElementById("dropdown-menu")!;
    menu.classList.toggle("hidden", !open);
  };
  return (
    <div className="relative flex flex-col gap-2">
      <div
        onClick={toggleDropdown}
        className="dark:bg-Primary-100  flex w-[169.97px]  max-w-96 cursor-pointer flex-row  items-center  justify-between rounded-[4px] border  bg-white p-4 text-xs shadow-md focus:outline-none  dark:border-none dark:text-white"
      >
        <span id="selecteditem">Filter By Region</span>
        <span>
          <FontAwesomeIcon
            icon={open == false ? faCaretDown : faCaretUp}
            className="w-3"
          />
        </span>
      </div>
      <div
        id="dropdown-menu"
        className={
          !open
            ? "hidden"
            : "" +
              "dark:bg-Primary-100 absolute top-[54px] flex w-full flex-col  items-start gap-2 rounded-[4px] border  bg-white p-4 text-xs font-normal shadow-md focus:outline-none  dark:border-none dark:text-white"
        }
      >
        <div onClick={handleClick} className=" cursor-pointer">
          Africa
        </div>
        <div onClick={handleClick} className=" cursor-pointer">
          Americas
        </div>
        <div onClick={handleClick} className=" cursor-pointer">
          Asia
        </div>
        <div onClick={handleClick} className=" cursor-pointer">
          Europe
        </div>
        <div onClick={handleClick} className=" cursor-pointer">
          Oceania
        </div>
      </div>
    </div>
  );
}
