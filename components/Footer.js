import React from 'react';
import Linkedin from '../public/linkedin.svg';
import Github from '../public/github.svg';
import Mail from '../public/mail.svg';
import NextJS from '../public/nextjs.svg';
import Tailwind from '../public/tailwind.svg';

export const Footer = () => {
  const IconClassName = 'w-full fill-black h-8 mx-4 my-2 rounded-lg dark:fill-white';
  return (
    <div className="py-5 px-20 flex flex-wrap gap-1 justify-between items-center text-sm md:text-xl dark:text-white text-black">
      <div className="flex justify-around w-full md:w-fit">
        {/* TODO: add to meta doc */}
        <a href="mailto:vaisakh2019@iiitkottayam.ac.in">
          <Mail className={IconClassName} />
        </a>
        <a href="https://www.linkedin.com/in/vaisakhnp/">
          <Linkedin className={IconClassName} />
        </a>
        <a href="https://github.com/cr1spyvada">
          <Github className={IconClassName} />
        </a>
      </div>
      <div className="px-2 flex flex-row items-center justify-center w-full md:w-fit">
        Developed with
        <NextJS className="fill-black w-8 m-2 rounded-lg dark:fill-white" />
        ,
        <Tailwind className="fill-black w-10 m-2 rounded-lg dark:fill-white" />& ❤️ By Vaisakh
      </div>
    </div>
  );
};
