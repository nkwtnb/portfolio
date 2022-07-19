import styled from "styled-components";

const FooterWrapper = styled.footer`
height: 30px;
background-color: #000;
text-align: center;
width: 100%;
bottom: 0px;
z-index: 10;
color: #fff;
font-size: 12px;
padding-right: 8px;
`;

export default function Footer(props: any) {

  return (
    <FooterWrapper>
      <div className="d-flex align-items-center justify-content-end h-100 w-100">
        ©️2022 Naoki
      </div>
    </FooterWrapper>
  );
}
