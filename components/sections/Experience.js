import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

const Experience = ({ textEnter, textLeave }) => {
  return (
    <PageContainer textEnter={textEnter} textLeave={textLeave} title="Experience">
      <div className="h-full relative my-4 container mx-auto px-6 flex flex-col justify-between gap-y-4">
        {/* vertical timeline line */}
        <div className="absolute z-0 w-2 rounded-xl h-full bg-w6 dark:bg-w1 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        {metadata.Experience.map((value, idx) => (
          <div key={idx} className="relative z-10 text-w1 dark:text-w6">
            <div
              className={`${idx % 2 == 0 ? 'timeline-container' : 'timeline-container-left'} ${
                idx === 0 && 'pt-0'
              }`}>
              <div
                className={
                  (idx === 0 ? 'invisible xs:visible ' : '') +
                  (idx % 2 == 0 ? 'timeline-pointer' : 'timeline-pointer-left')
                }
                aria-hidden="true"></div>
              <div className="bg-w6 dark:bg-w1 py-4 px-6 rounded-md shadow-md">
                <span className="font-bold text-w2 dark:text-w4 text-xs tracking-wide">
                  {value.Duration[0]} - {value.Duration[1]}
                </span>
                <div className="text-lg md:text-xl font-bold pt-1">{value.Org}</div>
                <div className="pt-1">{value.Role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Experience;
