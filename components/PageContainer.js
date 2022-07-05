import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const PageContainer = ({ children }) => {
  return (
    <div className="bg-sky-200 dark:bg-sky-900 px-20">
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};
