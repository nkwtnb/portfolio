import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../logo.svg";
import HeaderLabel from "../HeaderLabel";

type ContentTextProps = {
  text: string;
}
const ContentText = function (props: ContentTextProps) {
  const Text = styled.p`
    white-space: pre-line;
    line-height: 36px;
    font-size: 16px;
    color: #2a2a2a;
  `
  return (
    <Text>{props.text}</Text>
  );
};

const Contents = function (props: any) {
  const Contents = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
  `;
  return (
    <Container fluid="md" className="h-100">
      <HeaderLabel text="About" />
      <Row className="h-100">
        <Col md={6} className="w-100 h-100">
          <Contents className="d-flex align-items-center justify-content-center">
            <img src={Icon} alt="female-worker-checking-data.png" />
          </Contents>
        </Col>
        <Col md={6} className="w-100 h-100">
          <Contents className="d-flex align-items-center justify-content-center">
            <Col>
              <ContentText text={`
              はじめまして、Naokiです。
              SES系企業、受託開発企業を経験して今に至ります。
              SES系企業では主にJavaを使用し、
              受託開発起業では主にJavaScript(TypeScript含む)を使用して
              開発を行なっておりました。
              `} />
            </Col>
          </Contents>
        </Col>
      </Row>
    </Container>
  );
};

export default function About(props: any) {
  return (
    <section>
      <Contents />
    </section>
  );
}
