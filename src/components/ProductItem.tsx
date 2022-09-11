import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import NoImage from "../resources/images/NoImage.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Repository } from "../hooks/useProductFetcher";
import { Topic } from "./Topic";

type IconProps = {
  name: IconProp;
  type: "github" | "link";
  url: string;
}

const IconWrapper = styled.span`
  margin-left: 10px;
`;

const FontAwesomeWrapper = styled.span`
  border-radius: 10px;
  padding: 4px 4px;
  color: #000;
  transition: all 0.3s ease;
  &:hover {
    background-color: #484848;
    color: white;
  }
`;

// プロダクトカードの右上アイコン
// URLが未設定であれば描画しない
const Icon = function (props: IconProps) {
  if (props.url) {
    return (
      <IconWrapper>
        <a href={props.url} style={{ color: "#000"}} target="_blank">
          <FontAwesomeWrapper>
              <FontAwesomeIcon icon={props.name}></FontAwesomeIcon>
          </FontAwesomeWrapper>
        </a>
      </IconWrapper>
    );
  } else {
    return <></>;
  }
}

type ProductItem = {
  items: Repository[]
}

const Item = function (props: any) {
  return (
        <Col lg={4} className="w-100 d-flex flex-column mb-4" style={{minHeight: "560px"}}>
          <div className="flex-grow-1" style={{border: "1px solid #ddd"}}>
          {/* プロダクトカード：ヘッダ */}
          <div className="d-flex" style={{minHeight: 40, width: "100%", padding: "8px"}}>
            <div className="d-flex text-break">
              <span style={{fontSize: "18px", fontWeight: "bold"}}>{props.title}</span>
            </div>
            <div className="d-flex ml-auto align-items-center">
              <Icon type="github" url={props.github} name={faGithub}></Icon>
              <Icon type="link" url={props.url} name={faExternalLinkAlt}></Icon>
            </div>
          </div>
          {/* プロダクトカード：イメージ */}
          <div className="d-flex align-items-center justify-content-center" style={{height: 350, borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd"}}>
            <img src={props.image} style={{width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%"}}/>
          </div>
          {/* プロダクトカード：説明エリア */}
          <div className="flex-grow-1 d-flex flex-column" style={{padding: 8}}>
            <div style={{fontSize: "14px", fontWeight: "Bold"}}>説明</div>
            <div style={{fontSize: "14px", whiteSpace: "break-spaces"}}>
              {props.description}
            </div>
            <div style={{marginTop: 20}}></div>
            <div style={{fontSize: "14px", fontWeight: "Bold"}}>使用言語、ライブラリ(<a href="https://github.com/topics" target={"_blank"}>GitHub Topics</a>)</div>
            <div style={{fontSize: "14px",  whiteSpace: "break-spaces"}}>
              {
                props.skills.map((skill: string, index: number) => {
                  return <Topic name={skill} key={index}/>
                })
              }
            </div>
          </div>
          </div>
        </Col>
  )
}

export default function ProductItem(props: ProductItem) {
  return (
    <>
      {
        props.items.map((content, index) => {
          // プロダクトイメージ未設定の場合はNoImageを設定
          const image = content.thumbnail ? content.thumbnail : NoImage.src;
          return <Item
                    key={index}
                    image={image}
                    skills={content.skills ? content.skills : []}
                    title={content.name}
                    description={content.description}
                    github={content.svn_url}
                    url={content.homepage}
                  />;
        })
      }
    </>
  );
}