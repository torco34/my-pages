import React from "react";
import { Link } from "react-router-dom";

export const DashboardWrapper = ({ children }) => {
  return (
    <div>
      <nav className="m-3 p-2 m-lg-1">
        <Link to="/deshboar">Lins</Link>
        <Link to="/deshboar/profile">Profile</Link>
        <Link to="/signout">Signout</Link>
        <Link to="u/:username">Public</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
};
