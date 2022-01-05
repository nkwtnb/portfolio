import { Col } from "react-bootstrap";

type HeaderLabelProps = {
  text: string;
}

export default function HeaderLabel(props: HeaderLabelProps) {
  return (
    <Col>
      <div className="text-center">
        {props.text}
      </div>
    </Col>
  );
}
