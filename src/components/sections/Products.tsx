import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../ProductItem";

const Contents = function (props: any) {
  const Contents = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
  `;
  return (
    <Container fluid="md" className="h-100">
      <Row className="h-100 w-100">
        <ProductItem items={
          [
            {
              title: "Product 1",
              detail: "プロダクトの説明をここに書きます。",
              skills: []
            },
            {
              title: "Product 2",
              detail: "プロダクトの説明をここに書きます。",
              skills: []
            },
            {
              title: "Product 3",
              detail: "プロダクトの説明をここに書きます。",
              skills: []
            },
            {
              title: "Product 4",
              detail: "プロダクトの説明をここに書きます。",
              skills: []
            },
          ]
        } />
      </Row>
    </Container>
  );
};

export default function Products(props: any) {
  const Products = styled.section`
  `
  return (
    <Products>
      <Contents />
    </Products>
  );
}
