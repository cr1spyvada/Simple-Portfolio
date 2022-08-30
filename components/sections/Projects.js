import { faCode, faExternalLink, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

export const Projects = ({ textEnter, textLeave }) => {
  return (
    <PageContainer textEnter={textEnter} textLeave={textLeave} title="Projects">
      <div className="w-full h-full md:w-5/7 grid p-4 gap-4 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:row-span-1 group relative lg:col-span-2 rounded-lg overflow-hidden">
          <Thumbnail textEnter={textEnter} textLeave={textLeave} idx={0} />
        </div>
        <div className="lg:row-span-1 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <Thumbnail textEnter={textEnter} textLeave={textLeave} idx={1} />
        </div>
        <div className="lg:row-span-1 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <Thumbnail textEnter={textEnter} textLeave={textLeave} idx={2} />
        </div>
        {/* <div className="lg:row-span-1 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <Thumbnail textEnter={textEnter} textLeave={textLeave} idx={3} />
        </div> */}
        <div className="lg:row-span-1 group relative lg:col-span-2 rounded-lg overflow-hidden">
          <Thumbnail textEnter={textEnter} textLeave={textLeave} idx={3} />
        </div>
      </div>
    </PageContainer>
  );
};

const Thumbnail = ({ idx, textEnter, textLeave }) => {
  const { source, code, live, title } = metadata.Projects[idx];
  return (
    <>
      <img
        // src="./img1.jpg"
        src={source}
        className="h-full w-full group-hover:blur-sm group-hover:scale-110 transform transition duration-500 ease-out"
      />
      <div className="absolute flex flex-col md:flex-row justify-between p-3 items-center text-w1 opacity-a0 bottom-0 left-0 h-full w-1/2 md:h-1/3 md:w-full bg-w6 ">
        <div className="font-bold text-md md:text-xl py-2">{title}</div>
        <div className="flex justify-evenly gap-x-10">
          <a
            onMouseOver={() => textEnter(2)}
            onMouseLeave={textLeave}
            href={code}
            className="font-semibold rounded-full bg-w2 p-2 w-6 md:w-10 h-6 md:h-10 flex justify-center items-center text-gray-100">
            {/* Source Code */}
            <FontAwesomeIcon icon={faCode} style={{ fontSize: '1rem' }} />
          </a>
          {live && (
            <a
              onMouseOver={() => textEnter(2)}
              onMouseLeave={textLeave}
              href={live}
              className="font-semibold rounded-full bg-w2 p-2 w-6 md:w-10 h-6 md:h-10 flex justify-center items-center text-gray-100">
              {/* Live Demo */}
              <FontAwesomeIcon icon={faExternalLink} style={{ fontSize: '1rem' }} />
            </a>
          )}
        </div>
      </div>
    </>
  );
};
