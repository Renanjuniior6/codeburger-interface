import styled from "styled-components"

import BackgroundImage from "../../assets/backgorund-image.svg"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${BackgroundImage}");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 92%;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const ContainerItems = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 92%;
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 10%;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 1.4rem;
    }
  }

  img {
    height: 16%;
  }

  button {
    margin-top: 12%;
    margin-bottom: 7%;

    @media screen and (max-width: 600px) {
      font-size: 1.1rem;
      margin-bottom: 14%;
      margin-left: 3%;
    }

    @media screen and (max-width: 375px) {
      font-size: 1.1rem;
      height: 2rem;
      margin-left: 3%;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 1%;
    height: 86%;
    width: 96%;
    border-radius: 15px;
  }
`

export const Label = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 14px;
  color: #ffffff;
  margin-top: 5%;
  margin-bottom: 5px;

  @media screen and (max-width: 600px) {
    margin-left: 3%;
    font-size: 1.2rem;
    margin-bottom: 3%;
  }

  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`

export const Input = styled.input`
  width: 24rem;
  height: 2rem;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${(props) => (props.error ? "2px solid #cc1717" : "none")};
  padding-left: 10px;

  @media screen and (max-width: 600px) {
    width: 94%;
    margin-left: 3%;
    height: 2.3rem;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 375px) {
    height: 1.8rem;
  }
`

export const SignInLink = styled.p`
  font-size: 15px;
  line-height: 16px;
  color: #ffffff;
  font-weight: 300;

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    margin-left: 3%;
    font-size: 1rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`
