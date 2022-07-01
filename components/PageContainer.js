import React from "react";
import { NavBar } from "./NavBar";

export const PageContainer = ({ children }) => {
  return (
    <div className="bg-green-700">
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
};
