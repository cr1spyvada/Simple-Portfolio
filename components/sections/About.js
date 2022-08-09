import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

export const About = () => {
  return (
    <PageContainer title="About">
      <div className="w-full text-left h-full flex flex-col justify-around font-light text-lg">
        <div className="items-end flex flex-col">
          <div className="font-normal w-full text-left text-xl py-2 text-gray-900 dark:text-sky-200">
            Me,Myself & I
          </div>
          <ul className="md:w-3/4">
            {metadata.About.Bio.map((item, idx) => (
              <li key={idx} className="list-none my-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-end">
          <div className="font-normal w-full text-left text-xl py-2 text-gray-900 dark:text-sky-200">
            Skills
          </div>
          <ul className="ml-auto gap-x-8 md:w-3/4 flex flex-wrap justify-start md:justify-between w-full">
            {Object.entries(metadata.About.Skills).map(([key, value], idx) => (
              <li className="list-none my-2 flex flex-col" key={idx}>
                <a className="font-normal lg:w-1/4">{key}:</a>
                <a className="lg:w-3/4 flex flex-col">
                  {value.split(', ').map((val, index) => (
                    <div key={index}>{val}</div>
                  ))}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};
