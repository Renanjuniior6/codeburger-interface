import styled from "styled-components"

import BackgroundImage from "../../assets/Burger-logo-foot.png"

export const Container = styled.div`
  background-image: url(${BackgroundImage});
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 75px;
  padding: 40px 0;

  @media screen and (max-width: 600px) {
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: normal;
  }
`

export const ContainerItems = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (max-width: 600px) {
    align-items: start;
    margin-left: 4%;
  }
`
export const Info = styled.div``
export const Topic = styled.h3`
  font-weight: 600;
  color: #9758a6;
  font-size: 24px;
`
export const P = styled.p`
  color: white;
  font-size: 20px;
`

export const Form = styled.form`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 55px;

  @media screen and (max-width: 600px) {
    align-items: center;
  }

  textarea {
    width: 466px;
    height: 147px;
    border: 4px solid #efefef;
    background: transparent;
    padding-left: 15px;
    padding-top: 15px;
    border-radius: 7px;
    color: #fff;
    font-size: 18px;

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }
`

export const Input = styled.input`
  width: 466px;
  height: 70px;
  border: 4px solid #efefef;
  background: transparent;
  padding-left: 15px;
  border-radius: 7px;
  color: #fff;
  font-size: 18px;
  outline: none;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`

export const Button = styled.button`
  width: 466px;
  height: 70px;
  background: transparent;
  color: #fff;
  font-size: 20px;
  border: 4px solid #efefef;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`
