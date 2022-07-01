import React, { useState } from "react";

export const NavBar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  function changeState() {
    setDarkTheme(!darkTheme);
    console.log({ darkTheme });
  }
  return (
    // <div>
    <div className="flex justify-around py-5 items-center flex-row">
      <div className="flex flex-col border dark:text-white">
        <div className="text-xl font-bold">Vaisakh NP</div>
        <div className="text-lg font-semibold mx-auto">
          Full-Stack Developer
        </div>
      </div>
      <div className="flex flex-row items-center dark:text-white text-lg border">
        <div className="text-center mx-4">Experience</div>
        <div className="text-center mx-4">Projects</div>
        <div className="text-center mx-4">About</div>
        <div className="text-center mx-4">Contact</div>
      </div>
      <div className="flex items-center justify-center border">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onChange={changeState}
              defaultChecked={darkTheme}
            />
            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                darkTheme == true && "translate-x-full bg-yellow-400"
              }`}
            ></div>
          </div>
        </label>
      </div>
    </div>
    // </div>
  );
};
