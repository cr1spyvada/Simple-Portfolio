import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

export const About = () => {
  return (
    <PageContainer title="About">
      <div className="w-full relative text-left h-full flex flex-col justify-around font-light text-lg">
        <div className="flex flex-col items-end">
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
          <ul className="ml-auto gap-x-12 md:w-3/4 flex flex-wrap justify-start w-full">
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
        <a
          href="https://drive.google.com/file/d/1iNqIRmDYrXFQOkBLiotiCpdhEuKW7lUY/view?usp=sharing"
          className="mt-4 text-xl ml-auto font-semibold w-fit flex items-center flex-nowrap rounded-lg dark:hover:text-white dark:hover:border-white px-2 border-0 text-sky-900 dark:text-blue-300 hover:text-sky-500">
          View my Resume
          <div className="text-2xl animate-bounceX mx-1">
            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1.2rem' }} />
          </div>
        </a>
      </div>
    </PageContainer>
  );
};
