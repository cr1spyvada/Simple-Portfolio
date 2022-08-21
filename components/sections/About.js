import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

export const About = ({ textEnter, textLeave }) => {
  return (
    <PageContainer textEnter={textEnter} textLeave={textLeave} title="About">
      <div className="w-full relative text-left h-full flex flex-col justify-around font-light text-lg">
        <div className="flex flex-col text-right md:text-right items-end">
          <ul className="md:w-3/4">
            {metadata.About.Bio.map((item, idx) => (
              <li key={idx} className="list-none md:my-0 my-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-end rounded-lg">
          <div className="w-full text-right text-2xl py-2 pr-2">Some of the tools I've used:</div>
          <ul className="ml-auto text-right gap-x-12 md:w-3/4 flex flex-wrap justify-end w-full">
            {Object.entries(metadata.About.Skills).map(([key, value], idx) => (
              <li className="list-none rounded-lg my-2 flex flex-col" key={idx}>
                <span className="font-semibold">{key}:</span>
                <span className="flex flex-col">
                  {value.split(', ').map((val, index) => (
                    <div className="dark:text-gray-300 text-w6" key={index}>
                      {val}
                    </div>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <a
          onMouseEnter={() => textEnter(2)}
          onMouseLeave={textLeave}
          href="https://drive.google.com/file/d/1iNqIRmDYrXFQOkBLiotiCpdhEuKW7lUY/view?usp=sharing"
          className="mt-4 text-xl ml-auto font-semibold w-fit flex items-center flex-nowrap rounded-lg dark:hover:text-white dark:hover:border-white px-2 border-0 text-w4 dark:text-w2 hover:text-w5">
          View my Resume
          <div className="text-2xl animate-bounceX mx-1">
            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1.2rem' }} />
          </div>
        </a>
      </div>
    </PageContainer>
  );
};
