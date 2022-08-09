import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

const Experience = () => {
  return (
    <PageContainer title="Experience">
      <div className="h-full relative my-4">
        <div className="relative container mx-auto px-6 flex flex-col justify-center gap-y-4">
          <div className="absolute z-0 w-2 rounded-xl h-full bg-slate-600 dark:bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
          {metadata.Experience.map((value, idx) => (
            <div key={idx} className="relative z-10 text-white dark:text-black">
              <div className={idx % 2 == 0 ? 'timeline-container' : 'timeline-container-left'}>
                <div
                  className={idx % 2 == 0 ? 'timeline-pointer' : 'timeline-pointer-left'}
                  aria-hidden="true"></div>
                <div className="bg-slate-800 dark:bg-white py-4 px-6 rounded-md shadow-md">
                  <span className="font-bold text-indigo-600 text-xs tracking-wide">
                    {value.Duration[0]} - {value.Duration[1]}
                  </span>
                  <div className="text-lg md:text-xl font-bold pt-1">{value.Org}</div>
                  <div className="pt-1">{value.Role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Experience;
