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

export const RegisterImage = styled.img`
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
    margin-top: 1%;

    @media screen and (max-width: 600px) {
      font-size: 1.4rem;
      margin-top: 5%;
      margin-bottom: 5%;
    }

    @media screen and (max-width: 414px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 412px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 375px) {
      margin-top: 0%;
    }
  }

  img {
    height: 13%;

    @media screen and (max-width: 600px) {
      height: 10%;
    }

    @media screen and (max-width: 414px) {
      display: none;
    }

    @media screen and (max-width: 412px) {
      display: block;
      height: 10%;
    }

    @media screen and (max-width: 375px) {
      display: none;
    }
  }

  button {
    margin-top: 7%;
    margin-bottom: 4%;

    @media screen and (max-width: 600px) {
      margin-left: 1%;
      margin-top: 13%;
      margin-bottom: 17%;
      font-size: 1.2rem;
    }

    @media screen and (max-width: 414px) {
      margin-top: 6%;
      margin-bottom: 11%;
    }

    @media screen and (max-width: 412px) {
      margin-top: 13%;
      margin-bottom: 17%;
    }

    @media screen and (max-width: 375px) {
      font-size: 1rem;
      height: 1.9rem;
      margin-bottom: 11%;
    }
  }

  @media screen and (max-width: 600px) {
    width: 97%;
    height: 86%;
    border-radius: 15px;
  }
`

export const Label = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${(props) => (props.error ? "2%" : "5%")};
  margin-bottom: 5px;

  @media screen and (max-width: 600px) {
    margin-left: 1%;
    font-size: 1.2rem;
    margin-bottom: 3%;
  }

  @media screen and (max-width: 414px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 412px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
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
    width: 98%;
    margin-left: 1%;
    height: 2.1rem;
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
    margin-left: 1%;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 412px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`
