import React, { useState } from "react";
import { useTheme } from "next-themes";

export const NavBar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  function changeState() {
    if (darkTheme === false) {
      document.documentElement.classList.add("dark");
      setDarkTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkTheme(false);
    }
    console.log({ darkTheme });
  }
  return (
    <div className="flex justify-around py-5 items-center flex-row">
      <div className="flex flex-col dark:text-white">
        <div className="text-2xl font-bold">Vaisakh NP</div>
        <div className="text-xl font-semibold mx-auto">
          Full-Stack Developer
        </div>
      </div>
      <div className="flex flex-row items-center dark:text-white text-xl">
        <div className="text-center mx-4">Experience</div>
        <div className="text-center mx-4">Projects</div>
        <div className="text-center mx-4">About</div>
        <div className="text-center mx-4">Contact</div>
      </div>
      <div className="flex items-center justify-center">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onChange={changeState}
              defaultChecked={darkTheme}
            />
            <div
              className={
                "block bg-gray-500 w-14 h-8 rounded-full dark:bg-blue-600"
              }
            ></div>
            <div
              className={
                "absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition dark:translate-x-full"
              }
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};