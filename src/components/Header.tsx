import styled from "styled-components";
import HeaderItem from "./HeaderItem";
import Spacer from "./Spacer";

export default function Header(props: any) {
  const Header = styled.header`
    height: 72px;
    background-color: #1234;
  `;

  return (
    <Header>
        <HeaderItem url="#1" label="About"></HeaderItem>
        <Spacer value={10}/>
        <HeaderItem url="#2" label="Products"></HeaderItem>
        <Spacer value={10}/>
        <HeaderItem url="#3" label="Contact"></HeaderItem>
        <Spacer value={10}/>
    </Header>
  );
}
