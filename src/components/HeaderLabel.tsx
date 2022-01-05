import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

type HeaderLabelProps = {
  text: string;
}

export default function HeaderLabel(props: HeaderLabelProps) {
  const Contact = styled.section`
    height: 400px;
  `;

  return (
    <Col>
      <div className="text-center">
        {props.text}
      </div>
    </Col>
  );
}
