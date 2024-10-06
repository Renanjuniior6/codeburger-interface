import styled from "styled-components"

export const Container = styled.div`
  margin-top: 100px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  hr {
    margin-bottom: 20px;
    background-color: #000;
    height: 3px;
  }
`

export const Img = styled.img`
  width: 276px;
  height: 120px;
`
export const P = styled.p`
  width: 570px;
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`

export const LinkStyle = styled.a`
  cursor: pointer;
`

export const ContainerIcons = styled.div`
  display: flex;
  gap: 20px;
`
export const Line = styled.div`
  border-bottom: 2px solid #000;
  width: 90%;
  margin-bottom: 40px;
`
export const Rights = styled.div`
  p {
    text-align: center;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 600px) {
    p {
      width: 61%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`
