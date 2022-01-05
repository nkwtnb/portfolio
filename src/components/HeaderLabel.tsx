import styled from "styled-components";
import { Col } from "react-bootstrap";

type HeaderLabelProps = {
  text: string;
  color?: string;
}

export default function HeaderLabel(props: HeaderLabelProps) {
  const Label = styled.div`
    font-size: 30px;
    color: ${props.color ? props.color : "#484848"};
    font-weight: bold;
    width: 100%;
    padding-top: 40px;
  `
  return (
    <Col>
      <Label className="text-center">
        {props.text}
      </Label>
    </Col>
  );
}
