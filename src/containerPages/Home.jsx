import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TextTecno } from "../components/TextTecno";
import { ImgHome } from "../components/ImgHome";
function Home() {
  return (
    <Container>
      <Row>
        <Col className="" lg={true}>
          <TextTecno />
        </Col>
        <Col className="" lg={true}>
          <ImgHome />
        </Col>
      </Row>
    </Container>
  );
}

export { Home };
