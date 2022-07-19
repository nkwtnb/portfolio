import styled from "styled-components";

const Text = styled.p<{align: string}>`
white-space: pre-line;
line-height: 36px;
font-size: 16px;
color: #2a2a2a;
text-align: ${(props) => props.align};
`;

type ContentTextProps = {
  text: string;
  align: "left" | "center" | "right"
}

export default function (props: ContentTextProps) {
  return (
    <Text align={props.align}>{props.text}</Text>
  );
};
