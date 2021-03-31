import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterComponent>
      <TMDB>
        {" "}
        <img src="/tmdb.svg" alt="Powered by TMDB" />
        <Link href="https://github.com/getgaurav/mshows">
          @getgaurav | GitHub
        </Link>
      </TMDB>

      <FooterFade />
    </FooterComponent>
  );
}

const FooterComponent = styled.div`
  width: 100%;
  height: 260px;
  background-color: #0f2133;
  position: relative;
  z-index: 102;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TMDB = styled.div`
  position: absolute;
  z-index: 96;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 60px;
    width: 200px;
    margin: 40px;
  }
`;
const Link = styled.a`
  color: #afafaf;
  text-decoration: none;
  font-size: 20px;
`;
const FooterFade = styled.div`
  width: 100%;
  height: 260px;
  position: relative;
  z-index: 95;
  background-image: linear-gradient(0deg, transparent, #002038cf, #0c1221);
`;

export default Footer;
