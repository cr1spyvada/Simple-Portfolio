import React from 'react';

export const PageContainer = ({ height, children, title, color = 'white' }) => {
  return (
    <div
      id={title}
      className={`
      ${height} md:w-[75vw] mx-auto md:h-screen flex flex-col justify-center px-10 md:px-20 dark:text-white ${
        title ? 'py-20' : 'py-0'
      } ${color}`}>
      {title && (
        <div className="h-min md:text-right text-right w-full md:mx-auto md:text-6xl text-3xl">
          {title?.toUpperCase()}
        </div>
      )}
      <div className="mb-auto md:my-auto h-5/6 w-full">{children}</div>
    </div>
  );
};
