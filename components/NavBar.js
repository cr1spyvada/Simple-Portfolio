import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faX } from '@fortawesome/free-solid-svg-icons';

export const NavBar = ({ textEnter, textLeave }) => {
  const [open, setOpen] = useState(false);
  const tabArray = ['About', 'Experience', 'Projects', 'Contact'];
  const toggleNav = () => {
    console.log('hello hello');
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
        className={`h-[100vh] w-[100vw] fixed backdrop-blur-xl z-[105] flex flex-col justify-start items-center text-3xl md:text-6xl transition-all ease-in-out duration-500 
          ${open ? 'translate-x-open' : 'translate-x-full'}
          `}>
        <div className="list-none my-auto flex flex-col gap-y-5 py-4 w-1/2 bg-w1 dark:bg-w6 shadow-2xl rounded-lg">
          {tabArray.map((value, idx) => (
            <li
              key={idx}
              onClick={() => setOpen(!open)}
              className="items-center w-max mx-auto md:ml-auto md:mr-10 my-5 text-center transition group delay-250 duration-300 rounded-md p-1">
              <a onMouseOver={() => textEnter(2)} onMouseLeave={textLeave} href={'#' + value}>
                {value}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-w4 dark:bg-w2"></span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
// <div className="sticky z-[100] rounded-3xl flex px-20 bg-transparent justify-between w-full top-0 left-0 py-4 md:py-1 items-center flex-col md:flex-row">
//   <div className="md:flex h-full w-full items-center justify-between py-41 md:px-10 px-7">
//     <div className="h-full dark:text-w1 font-bold text-2xl items-center text-w6">
//       {/* <div className="text-2xl flex-nowrap font-medium">@vaisakhnp</div> */}
//       {/* <div className="text-xl text-center font-light mx-auto">Full-Stack Developer</div> */}
//     </div>
//     <button
//       onClick={() => setOpen(!open)}
//       className="text-3xl dark:text-w1 absolute right-8 top-6 md:hidden">
//       {open ? (
//         <FontAwesomeIcon
//           icon={faX}
//           className="dark:text-w1 text-w6"
//           style={{ fontSize: '1.2rem' }}
//         />
//       ) : (
//         <FontAwesomeIcon
//           icon={faEllipsisVertical}
//           className="dark:text-w1 text-w6"
//           style={{ fontSize: '1.5rem' }}
//         />
//       )}
//     </button>
//     <ul
//       className={`md:flex shadow-md rounded-lg md:shadow-none md:justify-between gap-y-5 text-xl md:items-center md:pb-0 pb-12 absolute md:static ${
//         open ? 'bg-w1 dark:bg-w6' : 'bg-transparent dark:bg-transparent'
//       } dark:text-w1 dark:bg-w6 bg-w1 md:z-auto left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
//         open ? 'top-[5rem]' : 'top-[-30rem]'
//       }`}>
//       {tabArray.map((value, idx) => (
//         <li
//           key={idx}
//           className="items-center w-max mx-auto my-5 text-center transition group delay-250 duration-300 md:mx-4 rounded-md p-1">
//           <a onMouseOver={() => textEnter(2)} onMouseLeave={textLeave} href={'#' + value}>
//             {value}
//             <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-w4 dark:bg-w2"></span>
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>
