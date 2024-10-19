import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faX } from '@fortawesome/free-solid-svg-icons';

export const NavBar = ({ textEnter, textLeave }) => {
  const [open, setOpen] = useState(false);
  const tabArray = ['About', 'Experience', 'Projects', 'Contact'];
  const toggleNav = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    // TODO: add content to meta
    <>
      <div className="rounded-lg px-2 fixed w-full z-[110] top-3 text-2xl md:text-4xl flex justify-end items-center">
        <div className="h-10 flex rounded-lg justify-center items-center px-2 bg-w6 dark:bg-w1">
          <button
            // onMouseOver={textEnter}
            // onMouseOut={textLeave}
            onClick={toggleNav}
            className="relative h-10">
            <div
              className={
                open
                  ? 'active-hamburger before:bg-w1 dark:before:bg-w2 after:bg-w1 dark:after:bg-w2'
                  : 'hamburger before:bg-w1 dark:before:bg-w2 after:bg-w1 dark:after:bg-w2 bg-w1 dark:bg-w2'
              }></div>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 transition-opacity duration-700 backdrop-blur-xl z-[104] ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      <div
        className={`h-[100vh] w-[100vw] fixed z-[105] flex flex-col justify-start items-center text-3xl md:text-6xl transition-all ease-in-out duration-[600ms] ${
          open ? 'translate-x-open' : 'translate-x-full'
        }`}>
        <div className="list-none my-auto flex flex-col gap-y-5 py-4 w-1/2 bg-w6 text-w1 dark:bg-w1 dark:text-w6 shadow-2xl rounded-lg">
          {tabArray.map((value, idx) => (
            <li
              key={idx}
              onClick={() => setOpen(!open)}
              className="items-center w-max mx-auto md:ml-auto md:mr-10 my-5 text-center transition group delay-250 duration-300 rounded-md p-1">
              <a onMouseOver={() => textEnter(2)} onMouseLeave={textLeave} href={'#' + value}>
                {value}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-w2 dark:bg-w4"></span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};