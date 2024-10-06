import styled from "styled-components"

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    @media screen and (max-width: 600px) {
      width: 12rem;
    }

    @media screen and (max-width: 375px) {
      width: 11rem;
    }
  }
`
export const ProductName = styled.p`
  font-size: 1.2rem;
  line-height: 19px;
  color: #000000;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    font-weight: 500;
  }
`

export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-top: 30px;

  color: #000000;
`

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 8rem;
  }

  @media screen and (max-width: 375px) {
    width: 7rem;
    height: 8rem;
  }
`
