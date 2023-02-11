import React from "react";
import { Link } from "react-router-dom";

export const DashboardWrapper = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to="/deshboar">Lins</Link>
        <Link to="/deshboar/profile">Perfile</Link>
        <Link to="/signout">Signout</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
};
