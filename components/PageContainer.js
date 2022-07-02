import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const PageContainer = ({ children }) => {
  return (
    <div className="bg-green-500 dark:bg-green-700 px-5">
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};
