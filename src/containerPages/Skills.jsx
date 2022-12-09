import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TextTecno } from "../components/TextTecno";

function Skills() {
  return (
    <Container>
      <Row>
        <Col className="border border-info" lg={true}>
          <TextTecno />
        </Col>
        <Col lg={true}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          nulla, maxime odit sunt deserunt et tenetur delectus itaque molestias,
          libero laborum? Debitis nisi voluptatibus aperiam sequi nobis.
          Tempore, in cumque.
        </Col>
      </Row>
    </Container>
  );
}

export { Skills };
