import React from "react";
import { NavBar } from "./NavBar";

export const PageContainer = ({ children }) => {
  return (
    <div className="bg-lime-600">
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
};
