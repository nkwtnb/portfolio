import styled from "styled-components";

type Props = {
  axis: "x" | "y";
  value: number;
  inline: boolean;
}

const SpacerComponent = styled.span<{axis: string, value: number, inline: boolean}>`

display: ${(props) => props.inline ? "inline-block" : "block"};
${(props) => props.axis === "x" ? "width: " + props.value + "px" : ""};
${(props) => props.axis === "y" ? "height: " + props.value + "px"  : ""};
`;

export default function Spacer(props: Props) {
  return (
    <SpacerComponent axis={props.axis} value={props.value} inline={props.inline}/>
  );
}
