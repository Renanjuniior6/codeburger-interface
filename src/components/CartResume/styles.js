import styled from "styled-components"

import { Button } from "../Button"

export const Container = styled.div`
  background-color: #ffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";

    .title {
      grid-area: title;
      margin-bottom: 20px;
      font-weight: 500;

      @media screen and (max-width: 600px) {
        text-align: center;
      }
    }

    .items {
      grid-area: items;

      @media screen and (max-width: 600px) {
        font-size: 1.4rem;
      }
    }

    .items-price {
      grid-area: items-price;

      @media screen and (max-width: 600px) {
        font-size: 1.2rem;
      }
    }

    .delivery-tax {
      grid-area: delivery-tax;

      @media screen and (max-width: 600px) {
        font-size: 1.4rem;
      }
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;

      @media screen and (max-width: 600px) {
        font-size: 1.2rem;
      }
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 120px;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    margin-left: 2%;
  }
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 30px;
  height: 54px;

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    margin-left: 3%;
    width: 92%;
    height: 3rem;
  }
`
