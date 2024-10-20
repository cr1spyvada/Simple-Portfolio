import React from 'react';

export const PageContainer = ({
  textEnter,
  textLeave,
  height,
  children,
  title,
  id = null,
  color = 'bg-transparent dark:bg-transparent'
}) => {
  return (
    <div
      id={id ?? title}
      className={`
      snap-start ${height} md:w-[75vw] md:backdrop-blur-lg rounded-xl mx-auto md:min-h-screen flex flex-col justify-center px-10 md:px-20 dark:text-w1 ${
        title ? 'py-20' : 'py-0'
      } ${color}`}>
      {title && (
        <div
          onMouseEnter={() => textEnter(1)}
          onMouseLeave={textLeave}
          className="h-min w-fit  ml-auto md:ml-auto dark:text-w2 md:text-6xl text-3xl">
          {title?.toUpperCase()}
        </div>
      )}
      <div className="mb-auto p-3 md:p-0 backdrop-blur-xl rounded-xl md:backdrop-blur-none md:my-auto h-5/6 w-full">
        {children}
      </div>
    </div>
  );
};
