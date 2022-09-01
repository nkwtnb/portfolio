import { Col, Container, Row, Spinner } from "react-bootstrap";
import ProductItem from "../ProductItem";
import { useProductFetcher } from "../../hooks/useProductFetcher";

const Item = () => {
  const {data, error, isLoading} = useProductFetcher();
  if (error) return <div>failed to load</div>;
  if (isLoading) {
    return (
      <Col className="justify-content-center d-flex my-4">
        <Spinner animation="border" />
      </Col>
    )
  }
  return (
    <ProductItem items={data!} />
  )
}

const Contents = function (props: any) {
  return (
    <Container fluid="lg" className="h-100 d-flex align-items-top justify-content-center">
      <Row className="w-100 h-100">
        <Item />
      </Row>
    </Container>
  );
};

export default function Products(props: any) {
  return (
    <section>
      <Contents />
    </section>
  );
}
