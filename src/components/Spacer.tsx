import styled from "styled-components";

type Props = {
  axis: "x" | "y";
  value: number;
  inline: boolean;
}

export default function Spacer(props: Props) {
  const Spacer = styled.span`
    display: ${props.inline ? "inline-block" : "block"};
    ${props.axis === "x" ? "width: " + props.value + "px" : ""};
    ${props.axis === "y" ? "height: " + props.value + "px"  : ""};
  `;

  return (
    <Spacer />
  );
}
