import styled from "styled-components";

type Props = {
  label: string;
  url: string;
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
  `;
  return (
    <ItemWrapper>
      <ItemBox>
        <ItemLabel href={props.url}>
          {props.label}
        </ItemLabel>
      </ItemBox>
    </ItemWrapper>
  );
}
