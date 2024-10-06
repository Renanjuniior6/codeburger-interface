import styled from "styled-components"

import HomeLogo2 from "../../assets/burger-neon.jpg"
import HomeLogo from "../../assets/home-image-2.svg"

export const Container = styled.div``

export const HomeImg = styled.div`
  background-image: url(${HomeLogo});
  background-size: cover;
  width: 100%;
  height: 650px;

  @media screen and (max-width: 600px) {
    background-image: url(${HomeLogo2});
    background-position: center;
    height: 540px;
  }
`
