import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faX } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const tabArray = ['About', 'Experience', 'Projects', 'Contact'];
  return (
    // TODO: add content to meta
    <div className="relative rounded-xl flex px-20 z-[10000] dark:bg-sky-900 bg-white justify-between dark:drop-shadow-white drop-shadow-md w-full top-0 left-0 py-5 items-center flex-col md:flex-row">
      <div className="md:flex w-full items-center justify-between py-4 md:px-10 px-7">
        <div
          className="flex flex-col dark:text-white font-bold text-2xl items-center
      text-gray-800">
          <div className="text-2xl flex-nowrap font-medium">Vaisakh NP</div>
          <div className="text-xl text-center font-light mx-auto">Full-Stack Developer</div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl dark:text-white absolute right-8 top-6 cursor-pointer md:hidden">
          {open ? (
            <FontAwesomeIcon
              icon={faX}
              className="dark:text-white text-black"
              style={{ fontSize: '1.2rem' }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="dark:text-white text-black"
              style={{ fontSize: '1.5rem' }}
            />
          )}
        </div>
        <ul
          className={`md:flex shadow-md rounded-lg md:shadow-none md:justify-between gap-y-5 text-xl md:items-center md:pb-0 pb-12 absolute md:static dark:text-white dark:bg-sky-900 bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open ? 'top-[10rem] ' : 'top-[-30rem]'
          }`}>
          {tabArray.map((value, idx) => (
            <li
              key={idx}
              className="items-center w-max mx-auto my-5 text-center transition group delay-250 duration-300 md:mx-4 rounded-md p-1">
              <a href={'#' + value}>
                {value}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
