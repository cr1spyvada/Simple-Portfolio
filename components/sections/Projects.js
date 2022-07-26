import React from 'react';
import { PageContainer } from '../PageContainer';

export const Projects = () => {
  return (
    <PageContainer title="PROJECTS">
      <div className="w-full h-full md:w-5/7 border grid p-4 gap-4 md:grid-rows-3 md:grid-cols-3">
        <div className="border md:row-span-1 md:col-span-2 rounded-lg overflow-hidden">
          <img
            src="/img1.jpg"
            className="h-full w-full hover:blur-sm hover:scale-125 transform transition duration-1000 ease-out"
          />
        </div>
        <div className="md:row-span-2 md:col-span-1 rounded-lg border overflow-hidden">
          <img
            src="/img2.jpg"
            className="h-full w-full hover:blur-sm hover:scale-125 transform transition duration-1000 ease-out"
          />
        </div>
        <div className="md:row-span-2 md:col-span-1 rounded-lg border overflow-hidden">
          <img
            src="/img3.jpg"
            className="h-full w-full hover:blur-sm hover:scale-125 transform transition duration-1000 ease-out"
          />
        </div>
        <div className="md:row-span-1 md:col-span-1 rounded-lg border overflow-hidden">
          <img
            src="/img4.jpg"
            className="h-full w-full hover:blur-sm hover:scale-125 transform transition duration-1000 ease-out"
          />
        </div>
        <div className="md:row-span-1 md:col-span-2 rounded-lg border overflow-hidden">
          <img
            src="/img1.jpg"
            className="h-full w-full hover:blur-sm hover:scale-125 transform transition duration-1000 ease-out"
          />
        </div>
      </div>
    </PageContainer>
  );
};
