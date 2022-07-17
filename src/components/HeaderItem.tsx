import styled from "styled-components";

type Props = {
  label: string;
  url: string;
  scroll: string;
}

const clickHandler = (scroll: string) => {
  const HEADER_HEIGHT = 30;
  const element = document.getElementById(scroll);
  if (element === null) {
    return;
  }
  var rect = element.getBoundingClientRect();
  var elemtop = rect.top + window.pageYOffset;
  document.documentElement.scrollTop = elemtop - HEADER_HEIGHT;
}

const ItemWrapper = styled.div`
display: inline-block;
`;
const ItemBox = styled.div`
height: 72px;
width: 120px;
background-color: black;
display: table;
`;
const ItemLabel = styled.a`
display: table-cell;
vertical-align: middle;
padding: 0px 8px;
color: white;
text-decoration: none;
transition: 0.2s;
&:hover {
  color: #000;
  text-decoration: none;
  background-color: #fff;
}
`;

export default function HeaderItem(props: Props) {
  return (
    <ItemWrapper>
      <ItemBox>
        <ItemLabel onClick={ () => clickHandler(props.scroll)} href={props.url}>
          {props.label}
        </ItemLabel>
      </ItemBox>
    </ItemWrapper>
  );
}
