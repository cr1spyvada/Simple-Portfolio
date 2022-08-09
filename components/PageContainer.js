import React from 'react';
import { Footer } from './Footer';

export const PageContainer = ({ children, title, color = 'white' }) => {
  return (
    <div
      id={title}
      className={`min-h-screen md:h-screen flex flex-col justify-center px-10 md:px-20 dark:text-white ${
        title ? 'py-20' : 'py-0'
      } ${color}`}>
      {title && (
        <div className="h-min md:text-right text-center w-full md:text-6xl text-3xl">
          {title?.toUpperCase()}
        </div>
      )}
      <div className="my-auto h-5/6 w-full">{children}</div>
    </div>
  );
};
