import React from 'react';
import { metadata } from '../../data/content';

export const About = () => {
  return (
    <div className="border my-10 flex flex-col lg:flex-row justify-between items-center lg:h-screen dark:text-white">
      <div className=" my-auto text-center lg:w-1/5 text-6xl border">ABOUT</div>
      <div className="lg:w-4/5 border ml-4 text-left h-full flex flex-col justify-around font-light text-lg">
        <div className="items-end flex flex-col">
          <div className="font-normal w-full text-left text-xl py-2 text-gray-900 dark:text-sky-200">
            Me,Myself & I
          </div>
          <ul className="lg:w-3/4">
            {metadata.About.Bio.map((item, idx) => (
              <li key={idx} className="list-none my-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border">
          <div className="font-normal w-full text-left text-xl py-2 text-gray-900 dark:text-sky-200">
            Skills
          </div>
          <ul>
            {Object.entries(metadata.About.Skills).map(([key, value], idx) => (
              <li className="list-none my-2 flex flex-col lg:flex-row lg:justify-between" key={idx}>
                <a className="font-normal lg:w-1/4">{key}:</a>
                <a className="lg:w-3/4">{value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
