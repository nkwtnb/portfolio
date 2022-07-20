import styled from "styled-components";
import { Col } from "react-bootstrap";

type HeaderLabelProps = {
  id: string;
  text: string;
  color?: string;
}

const Label = styled.div<{color1: string | undefined}>`
font-size: 40px;
color: ${(props) => props.color1 ? props.color1 : "#484848"};
font-weight: bold;
width: 100%;
padding-top: 60px;
`;

export default function HeaderLabel(props: HeaderLabelProps) {
  return (
    <Col>
      <Label className="text-center" id={props.id} color1={props.color}>
        {props.text}
      </Label>
    </Col>
  );
}
