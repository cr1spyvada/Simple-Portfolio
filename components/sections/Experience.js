import React from 'react';
import { metadata } from '../../data/content';
import { PageContainer } from '../PageContainer';

const Experience = () => {
  return (
    <PageContainer title="experience">
      <div className="h-full relative m-4">
        <div className="absolute h-full border border-slate-600 dark:border-white left-1/2" />
        <div className="h-full flex flex-col justify-between gap-y-0 text-lg">
          {metadata.Experience.map((value, idx) => (
            <div key={idx} className="w-full relative flex align-center justify-center gap-x-6">
              <div
                className={`${
                  idx % 2 == 0 ? 'text-right order-1' : 'order-3'
                } w-2/5 bg-slate-800 text-white dark:bg-white dark:text-black p-4 rounded-lg`}>
                <div className="font-semibold text-2xl">{value.Org}</div>
                <div className="font-medium">{value.Role}</div>
              </div>
              <div
                className={`${
                  idx == 0 ? 'bg-lime-600 dark:bg-lime-500' : 'bg-slate-600 dark:bg-white'
                } m${
                  idx === 0 ? 'b' : idx === metadata.Experience.length - 1 ? 't' : 'y'
                }-auto z-10 order-2 rounded-3xl border-white`}>
                <div
                  className={`${
                    idx == 0
                      ? 'bg-lime-600 dark:bg-lime-500 animate-ping'
                      : 'bg-slate-600 dark:bg-white'
                  } my-auto z-10 rounded-3xl border-white p-3`}
                />
              </div>
              <div
                className={`${
                  idx % 2 == 0 ? 'order-3' : 'order-1 text-right'
                } w-2/5 text-gray-800 dark:text-gray-400 my-auto p-2 align-middle`}>
                {value.Duration[0]} - {value.Duration[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Experience;
