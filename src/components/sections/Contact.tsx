import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import mail from "../../resources/images/mail2image.png";
import ContentText from "../ContentText";

const ContactWrapper = styled.section`
min-height: 200px;
`;

const Contact = function (props: any) {
  return (
    <ContactWrapper>
      <Container fluid="md" className="h-100">
        <Row>
          <Col className="justify-content-center d-flex mt-2">
            <ContentText align="center" text={`ご興味がありましたら、以下メールアドレスへご連絡ください。
              ※スパム対策の為、画像となっております。
              `
            } />
          </Col>
        </Row>
        <Row>
          <Col className="justify-content-center d-flex mt-2">
            <img src={mail.src}/>
          </Col>
        </Row>
      </Container>
    </ContactWrapper>
  );
}

export default Contact;