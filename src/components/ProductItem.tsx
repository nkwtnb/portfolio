import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import image from "../resources/images/product1.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  name: IconProp;
}

const Icon = function (props: IconProps) {
  return (
    <span style={{padding: "0px 10px"}}><FontAwesomeIcon icon={props.name}></FontAwesomeIcon></span>
  );
}

type ProductItem = {
  items: {
    title: string;
    detail: string;
    skills: string[];
    github?: string;
    url?: string;
  }[]
}

const Item = function (props: any) {
  //各プロダクトカード
  const Item = styled.div`
    width: 340px;
    height: 540px;
    border: 1px solid #ddd;
  `;
  return (
    <Col md={4} className="w-100 d-flex justify-content-center" style={{height: "100%", paddingTop: 20}}>
      <Item className="d-flex align-items-top justify-content-center">
        <Container style={{ padding: 0 }}>
          {/* プロダクトカード：ヘッダ */}
          <div style={{display: "table", height: 40, width: "100%", padding: "8px"}}>
            <div style={{display: "table-cell"}}>
              <span style={{fontSize: "18px", fontWeight: "bold"}}>{props.title}</span>
            </div>
            <div style={{display: "table-cell", textAlign: "right"}}>
              <span><Icon name={faGithub}></Icon></span>
              <span><Icon name={faExternalLinkAlt}></Icon></span>
            </div>
          </div>
          {/* プロダクトカード：イメージ */}
          <div style={{height: 350}}>
            <img src={image} style={{width: "100%", height: "auto"}}/>
          </div>
          {/* プロダクトカード：説明エリア */}
          <div style={{padding: 8}}>
            <div style={{fontSize: "12px", fontWeight: "Bold"}}>説明</div>
            <div style={{height: "40px", fontSize: "12px"}}>
              {props.detail}
            </div>
            <div style={{marginTop: 20}}></div>
            <div style={{fontSize: "12px", fontWeight: "Bold"}}>言語、ライブラリなど</div>
            <div style={{fontSize: "12px"}}>
              {
                props.skills.join(", ")
              }
            </div>
          </div>
        </Container>
      </Item>
    </Col>
  )
}

export default function ProductItem(props: ProductItem) {
  return (
    <>
      {
        props.items.map((content, index) => {
          return <Item key={index} skills={content.skills} title={content.title} detail={content.detail} />
        })
      }
    </>
  );
}