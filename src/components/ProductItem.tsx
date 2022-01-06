import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import NoImage from "../resources/images/noimage.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  name: IconProp;
  type: "github" | "link";
  url: string;
}

// プロダクトカードの右上アイコン
// URLが未設定であれば描画しない
const Icon = function (props: IconProps) {
  if (props.url) {
    return (
      <span style={{padding: "0px 10px", color: "#000"}}>
        <a href={props.url} style={{ color: "#000"}} target="_blank">
          <FontAwesomeIcon icon={props.name}></FontAwesomeIcon>
        </a>
      </span>
    );
  } else {
    return <></>;
  }
}

type ProductItem = {
  items: {
    title: string;
    detail: string;
    skills: string[];
    image?: string;
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
              <span><Icon type="github" url={props.github} name={faGithub}></Icon></span>
              <span><Icon type="link" url={props.url} name={faExternalLinkAlt}></Icon></span>
            </div>
          </div>
          {/* プロダクトカード：イメージ */}
          <div className="d-flex align-items-center" style={{height: 350, borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd"}}>
            <img src={props.image} style={{width: "100%", height: "auto"}}/>
          </div>
          {/* プロダクトカード：説明エリア */}
          <div style={{padding: 8}}>
            <div style={{fontSize: "12px", fontWeight: "Bold"}}>説明</div>
            <div style={{height: "40px", fontSize: "12px", whiteSpace: "break-spaces"}}>
              {props.detail}
            </div>
            <div style={{marginTop: 20}}></div>
            <div style={{fontSize: "12px", fontWeight: "Bold"}}>言語、ライブラリなど</div>
            <div style={{fontSize: "12px",  whiteSpace: "break-spaces"}}>
              {
                props.skills.map((skill: string, index: number) => {
                  const comma: string = (index + 1) < props.skills.length ? ", " : "";
                  return <span style={{display: "inline-block"}} key={index}>{skill + comma}</span>
                })
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
          // プロダクトイメージ未設定の場合はNoImageを設定
          const image = content.image ? content.image : NoImage;
          return <Item
                    key={index}
                    image={image}
                    skills={content.skills}
                    title={content.title}
                    detail={content.detail}
                    github={content.github}
                    url={content.url}
                  />;
        })
      }
    </>
  );
}