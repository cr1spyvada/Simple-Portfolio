import React from "react";
import { Footer } from './Footer';

export const PageContainer = ({ children, title }) => {
  // const { title } = props;
  return (
    <div className="h-screen border dark:text-white my-10">
      {title && (
        <div className="h-min md:text-right text-center w-full text-6xl border">
          {title?.toUpperCase()}
        </div>
      )}
      <div className="h-5/6 w-full">{children}</div>
    </div>
  );
};
