import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Section_List = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      const section = document.getElementById(currentHash);

      if (section) {
        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setCurrentSection(currentHash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return currentSection;
};

const NavBarMobile = ({ toggleNav, open }) => {
  return (
    <div className="md:hidden rounded-lg px-2 fixed w-full z-[110] top-3 text-2xl md:text-4xl flex justify-end items-center">
      <div className="h-10 flex rounded-lg justify-center items-center px-2 bg-w6 dark:bg-w1">
        <button onClick={toggleNav} className="relative h-10">
          <div
            className={
              open
                ? 'active-hamburger before:bg-w1 dark:before:bg-w2 after:bg-w1 dark:after:bg-w2'
                : 'hamburger before:bg-w1 dark:before:bg-w2 after:bg-w1 dark:after:bg-w2 bg-w1 dark:bg-w2'
            }></div>
        </button>
      </div>
    </div>
  );
};

const NavBarDesktop = ({ textEnter, textLeave }) => {
  const [listVisibility, setListVisibility] = useState(false);
  const [visibilityTimeout, setVisibilityTimeout] = useState(null);

  const handleListVisibility = (value) => {
    setListVisibility(true);
    const timeout = setTimeout(() => {
      setListVisibility(false);
      setVisibilityTimeout(null);
    }, 2000);
    setVisibilityTimeout(timeout);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleListVisibility);

    return () => {
      window.removeEventListener('scroll', handleListVisibility);
    };
  }, []);

  return (
    <div className="hidden md:flex pr-4 fixed z-[110] top-1/3 right-0">
      <ul className="group flex flex-col gap-4 list-none text-xl lg:text-2xl w-[12ch]">
        {Section_List.map((sectionName, idx) => (
          <li
            key={idx}
            className="flex justify-end items-center gap-1 hover:text-w4 hover:dark:text-w2">
            <a
              className={`transition-all ease-in-out ${
                listVisibility ? 'w-full' : 'w-0'
              } group-hover:w-full duration-700 delay-500 overflow-hidden`}
              onMouseOver={() => textEnter(2)}
              onMouseLeave={textLeave}
              href={'#' + sectionName}>
              {sectionName}
            </a>
            ●
          </li>
        ))}
      </ul>
    </div>
  );
};

export const NavBar = ({ textEnter, textLeave }) => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    // TODO: add content to meta
    <>
      <NavBarMobile toggleNav={toggleNav} open={open} />
      <NavBarDesktop textEnter={textEnter} textLeave={textLeave} />
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
          {Section_List.map((value, idx) => (
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
