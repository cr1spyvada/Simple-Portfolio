import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';

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
    // TODO: add content to meta
    <div className="flex px-20 justify-between py-5 items-center flex-col md:flex-row">
      <div className="flex flex-col dark:text-white">
        <div className="text-2xl font-medium">Vaisakh NP</div>
        <div className="text-xl font-light mx-auto">Full-Stack Developer</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center my-4 font-light dark:text-white text-xl">
        {tabArray.map((value, idx) => (
          <div
            key={idx}
            className="text-center transition group delay-250 duration-300 mx-4 rounded-md p-1">
            {value}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Switch
          checked={darkTheme}
          onChange={changeState}
          className={
            'dark:bg-green-600 bg-gray-200 relative inline-flex h-8 w-14 items-center rounded-full'
          }>
          <span
            className={
              'transform transition ease-in-out duration-200 dark:translate-x-6 translate-x-1 inline-block h-7 w-7 rounded-full bg-white'
            }
          />
        </Switch>
      </div>
    </div>
  );
};
