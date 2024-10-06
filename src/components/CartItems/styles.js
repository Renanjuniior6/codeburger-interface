import styled from "styled-components"

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 10px;
  width: max-content;

  @media screen and (max-width: 600px) {
    width: 98%;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3.4rem;
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #b5b5b5;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: max-content;

  img {
    border-radius: 10px;
    width: 130px;
    height: 125px;
    margin-right: 13px;

    @media screen and (max-width: 600px) {
      width: 144px;
      height: 139px;
      margin-right: 1rem;
    }

    @media screen and (max-width: 375px) {
      width: 8rem;
      height: 9rem;
    }
  }

  p {
    font-size: 19px;
    color: #000000;
  }

  .DivCart {
    display: flex;
    @media screen and (max-width: 600px) {
      display: block;
    }
  }

  .ProductName {
    width: 161px;
    margin-right: 44px;

    @media screen and (max-width: 600px) {
      margin-right: 0;
      font-size: 1.5rem;
      font-weight: 500;
      width: 100%;
    }

    @media screen and (max-width: 400px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 390px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 1.3rem;
    }
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;

      @media screen and (max-width: 600px) {
        background: #9758a6;
        width: 34px;
        height: 35px;
        font-size: 24px;
        border-radius: 50px;
        color: white;
      }
    }

    p {
      margin-top: 5px;
    }

    @media screen and (max-width: 600px) {
      margin-top: 16px;
      margin-bottom: 11px;
    }
  }

  .BoxGrid {
    display: flex;
    gap: 6.6rem;

    @media screen and (max-width: 600px) {
      display: block;

      .FinalPrice {
        font-weight: 600;
        font-size: 21px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`
export const BoxEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`
