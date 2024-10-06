import ReactSelect from "react-select"
import styled from "styled-components"

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
`

export const ProductsImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 6px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 200px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${(props) => (props.isActiveStatus ? "bold" : "400")};
  border-bottom: ${(props) =>
    props.isActiveStatus ? "3px solid #9758a6" : "none"};
  padding-bottom: 6px;
`
