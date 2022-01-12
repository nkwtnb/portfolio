import styled from "styled-components";

type Props = {
  label: string;
  url: string;
  scroll: string;
}

const clickHandler = (scroll: string) => {
  const element = document.getElementById(scroll);
  if (element === null) {
    return;
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest"
  });
}

export default function HeaderItem(props: Props) {
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
