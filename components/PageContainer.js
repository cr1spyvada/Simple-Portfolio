import React from 'react';
import { Footer } from './Footer';

export const PageContainer = ({ children, title }) => {
  // const { title } = props;
  return (
    <div className="min-h-screen flex flex-col justify-center px-10 md:px-20 dark:text-white my-10">
      {title && (
        <div className="h-min md:text-right text-center w-full text-6xl">
          {title?.toUpperCase()}
        </div>
      )}
      <div className="my-auto h-5/6 w-full">{children}</div>
    </div>
  );
};
