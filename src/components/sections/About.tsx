import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "../../resources/images/profile.png";

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
      <Row className="h-100 align-items-center">
        <Col md={6} className="w-100 h-100 d-flex align-items-top justify-content-center">
          <Contents className="d-flex align-items-center justify-content-center">
            <img src={Profile}/>
          </Contents>
        </Col>
        <Col md={6} className="w-100 h-100 d-flex align-items-center justify-content-left">
          <Contents className="d-flex align-items-center justify-content-left">
            <ContentText text={`
              はじめまして、Naokiです。
              SES系企業、受託開発企業を経験して今に至ります。
              SES系企業では主にJavaを使用し、
              受託開発企業では主にJavaScript(TypeScript含む)を使用して
              開発を行なっておりました。
              `} />
          </Contents>
        </Col>
      </Row>
    </Container>
  );
};

export default function About(props: any) {
  const About = styled.section`
    vertical-align: middle;
  `
  return (
    <About>
      <Contents />
    </About>
  );
}
