import styled from "styled-components"

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const CartImg = styled.img`
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;

  @media screen and (max-width: 600px) {
    display: flex;
    margin-top: 2%;
    margin-left: 2%;
    flex-direction: column;
    gap: 20px;
  }
`
