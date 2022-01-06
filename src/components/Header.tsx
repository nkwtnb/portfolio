import styled from "styled-components";
import HeaderItem from "./HeaderItem";
import { Container, Row, Col } from "react-bootstrap";

export default function Header(props: any) {
  const Header = styled.header`
    height: 72px;
    background-color: #000;
    text-align: center;
    position: fixed;
    width: 100%;
    left: 0px;
    z-index: 10;
  `;

  return (
    <Container fluid>
      <Header>
        <Row>
          <Col md={12}>
            <HeaderItem url="#1" scroll="about" label="About"></HeaderItem>
            <HeaderItem url="#2" scroll="products" label="Products"></HeaderItem>
            <HeaderItem url="#3" scroll="contact" label="Contact"></HeaderItem>
          </Col>
        </Row>
      </Header>
    </Container>
  );
}
