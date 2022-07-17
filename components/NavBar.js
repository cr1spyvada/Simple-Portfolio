import React, { useState } from "react";
import { useTheme } from "next-themes";

export const NavBar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  function changeState() {
    if (darkTheme === false) {
      document.documentElement.classList.add('dark');
      setDarkTheme(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkTheme(false);
    }
  }
  const tabArray = ['About', 'Experience', 'Projects', 'Contact'];
  return (
    <div className="flex justify-between py-5 items-center flex-col md:flex-row">
      <div className="flex flex-col dark:text-white">
        <div className="text-2xl font-medium">Vaisakh NP</div>
        <div className="text-xl font-light mx-auto">Full-Stack Developer</div>
      </div>
      <div className="flex flex-col sm:flex-row items-center my-4 font-light dark:text-white text-xl">
        {tabArray.map((value) => (
          <div className="text-center transition group delay-250 duration-300 mx-4 rounded-md p-1">
            {value}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </div>
        ))}
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
            <div className={'block bg-gray-500 w-14 h-8 rounded-full dark:bg-green-600'}></div>
            <div
              className={
                'absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition dark:translate-x-full'
              }></div>
          </div>
        </label>
      </div>
    </div>
  );
};
