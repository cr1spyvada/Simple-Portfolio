import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const PageContainer = ({ children }) => {
  return (
    <div className="bg-sky-200 sm:text-sm dark:bg-slate-900 px-20">
      {/* <div className="sticky top-0 bg-sky-200 sm:text-sm dark:bg-slate-900 px-20"> */}
      <NavBar />
      {/* </div> */}
      <div>{children}</div>
      <Footer />
    </div>
  );
};
