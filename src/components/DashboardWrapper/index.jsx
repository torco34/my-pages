import React from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, Container } from "./styles";

export const DashboardWrapper = ({ children }) => {
  return (
    <>
      <Nav>
        <Logo>Logotipo</Logo>
        <Link to="/dashboard">Links</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/signout">Signout</Link>
      </Nav>
      <Container>{children}</Container>
    </>
  );
};
