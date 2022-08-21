import { faCode, faExternalLink, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

export const Projects = () => {
  return (
    <PageContainer title="Projects">
      <div className="w-full h-full md:w-5/7 grid p-4 gap-4 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:row-span-1 group relative lg:col-span-2 rounded-lg overflow-hidden">
          <Thumbnail idx={0} />
        </div>
        <div className="lg:row-span-2 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <Thumbnail idx={1} />
        </div>
        <div className="lg:row-span-2 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <Thumbnail idx={2} />
        </div>
        <div className="lg:row-span-1 group relative lg:col-span-1 rounded-lg overflow-hidden">
          <Thumbnail idx={3} />
        </div>
        <div className="lg:row-span-1 group relative lg:col-span-2 rounded-lg overflow-hidden">
          <Thumbnail idx={1} />
        </div>
      </div>
    </PageContainer>
  );
};

const Thumbnail = ({ idx }) => {
  const { source, code, live, title } = metadata.Projects[idx];
  return (
    <>
      <img
        // src="./img1.jpg"
        src={source}
        className="h-full w-full group-hover:blur-sm group-hover:scale-110 transform transition duration-500 ease-out"
      />
      <div className="absolute flex flex-col justify-center items-center text-w1 opacity-0 bottom-0 left-0 h-full w-full bg-w6 group-hover:opacity-50 transform transition duration-500 ease-in">
        <div className="font-bold text-2xl py-2">{title}</div>
        <div className="flex justify-evenly gap-x-10">
          <a
            href={code}
            className="font-semibold rounded-full bg-w2 p-2 w-10 h-10 flex justify-center items-center text-gray-100">
            {/* Source Code */}
            <FontAwesomeIcon icon={faCode} style={{ fontSize: '1.2rem' }} />
          </a>
          <a
            href={live}
            className="font-semibold rounded-full bg-w2 p-2 w-10 h-10 flex justify-center items-center text-gray-100">
            {/* Live Demo */}
            <FontAwesomeIcon icon={faExternalLink} style={{ fontSize: '1.2rem' }} />
          </a>
        </div>
      </div>
    </>
  );
};
