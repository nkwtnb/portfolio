import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../ProductItem";

const Contents = function (props: any) {
  const Contents = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
  `;
  return (
    <Container fluid="md" className="h-100 d-flex align-items-top justify-content-center">
      <Row className="h-100 w-100">
        <ProductItem items={
          [
            {
              title: "Portfolio",
              detail: "自分のポートフォリオページです。（このページ）",
              image: require("../../resources/images/product1.png"),
              github: "https://github.com/nkwtnb/gh-pages-portfolio",
              url: "https://nkwtnb.github.io/gh-pages-portfolio/",
              skills: ["TypeScript", "React", "Bootstrap(React-Bootstrap)", "styled-components"]
            },
            {
              title: "Product 2",
              detail: "プロダクトの説明をここに書きます。",
              image: require("../../resources/images/noimage.png"),
              skills: []
            },
            // {
            //   title: "Product 3",
            //   detail: "プロダクトの説明をここに書きます。",
            //   github: "htts:/hogehoge",
            //   skills: []
            // },
            // {
            //   title: "Product 4",
            //   detail: "プロダクトの説明をここに書きます。",
            //   skills: []
            // },
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
