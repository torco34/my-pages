import React from "react";
import { Link } from "react-router-dom";
import style from "./dashboardWre.module.css";
export const DashboardWrapper = ({ children }) => {
  return (
    <>
      <div className={style.nav}>
        <div className={style.logo}>Logotipo</div>
        <Link to="/dashboard">Links</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/signout">Signout</Link>
      </div>
      <div className="main-container">{children}</div>
    </>
  );
};
