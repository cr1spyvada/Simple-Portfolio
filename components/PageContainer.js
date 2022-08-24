import React from 'react';

export const PageContainer = ({ height, children, title, color = 'bg-w1 dark:bg-transparent' }) => {
  return (
    <div
      id={title}
      className={`
      ${height} md:w-[75vw] md:backdrop-blur-3xl dark:border-w2 border-2 daark:shadow-[#bfbebe]  md:shadow-lg rounded-xl mx-auto md:h-screen flex flex-col justify-center px-10 md:px-20 dark:text-w1 ${
        title ? 'py-20' : 'py-0'
      } ${color}`}>
      {title && (
        <div className="h-min md:text-right text-right w-full md:mx-auto dark:text-w2 md:text-6xl text-3xl">
          {title?.toUpperCase()}
        </div>
      )}
      <div className="mb-auto p-3 md:p-0 backdrop-blur-3xl shadow-w6 rounded-xl shadow-lg md:shadow-none md:backdrop-blur-none md:my-auto h-5/6 w-full">
        {children}
      </div>
    </div>
  );
};
