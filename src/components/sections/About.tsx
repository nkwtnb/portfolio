import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "../../resources/images/profile.png";

type ContentTextProps = {
  text: string;
}

const Text = styled.p`
white-space: pre-line;
line-height: 36px;
font-size: 16px;
color: #2a2a2a;
`;

const ContentsWrapper = styled.div`
margin: auto;
width: 100%;
height: 100%;
`;

const AboutWrapper = styled.section`
vertical-align: middle;
`;

const ContentText = function (props: ContentTextProps) {
  return (
    <Text>{props.text}</Text>
  );
};

const Contents = function (props: any) {
  return (
    <Container fluid="md" className="h-100">
      <Row className="h-100 align-items-center">
        <Col md={6} className="w-100 h-100 d-flex align-items-top justify-content-center">
          <ContentsWrapper className="d-flex align-items-center justify-content-center">
            <img src={Profile.src}/>
          </ContentsWrapper>
        </Col>
        <Col md={6} className="w-100 h-100 d-flex align-items-center justify-content-left">
          <ContentsWrapper className="d-flex align-items-center justify-content-left">
            <ContentText text={`
              はじめまして、Naokiです。
              SES系企業、受託開発企業でプログラマとして従事してきました。
              フロントエンドに軸足を置いておりますが、バックエンドにも興味を持っています。
              詳しい経歴は別途職務経歴書をご確認いただければと思います。
              `} />
          </ContentsWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default function About(props: any) {
  return (
    <AboutWrapper>
      <Contents />
    </AboutWrapper>
  );
}
