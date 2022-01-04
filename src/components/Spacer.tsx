import styled from "styled-components";

type Props = {
  value: number;
}

export default function Spacer(props: Props) {
  const Spacer = styled.span`
    display: inline-block;
    width: ${props.value}px;
  `;

  return (
    <Spacer />
  );
}
