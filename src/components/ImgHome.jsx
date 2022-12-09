import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mifoto from "../assets/img/img3.jpg";
import { ContainerImg } from "../assets/styled/ImgHome";
export const ImgHome = () => {
  return (
    <ContainerImg>
      <img src={mifoto} alt="foto" />
      <h2>Torcoroma Arias Ascanio</h2>
      <h4>Developer Junior</h4>
    </ContainerImg>
  );
};
