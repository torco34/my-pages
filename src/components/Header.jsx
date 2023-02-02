import React from "react";
import { NavLink } from "react-router-dom";
import { navbar } from "./data";
import { ContainerHeader } from "../assets/styled/Header";
export const Header = () => {
  return (
    <>
      <ContainerHeader>
        {navbar.map((navba) => (
          <li key={navba.to}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#CE7777" : "#2b3a55",
              })}
              to={navba.to}
            >
              {" "}
              {navba.text}
            </NavLink>
          </li>
        ))}
      </ContainerHeader>
    </>
  );
};
