import styled from 'styled-components'

import BackgroundImage from '../../assets/backgorund-image.svg'

export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${BackgroundImage}');
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`

export const RegisterImage = styled.img`
height: 87%;

@media screen and (max-width: 600px) {
    display: none;
}
`

export const ContainerItems = styled.div`
background: #373737;
border-radius: 0 10px 10px 0;
height: 87%;
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
        font-size: 1.7rem;
        margin-top: 5%;
        margin-bottom: 5%;
    }

    @media screen and (max-width: 414px) {
        font-size: 1.4rem;
    }
}

img {
    height: 96px;

    @media screen and (max-width: 600px) {
        height: 6rem;
    }

    
    @media screen and (max-width: 414px) {
        height: 4rem;
    }
}

button {
    margin-top: 7%;
    margin-bottom: 4%;

    @media screen and (max-width: 600px) {
    margin-left: 1%;
    margin-top: 11%;
    margin-bottom: 17%;
    font-size: 1.2rem;
}

    @media screen and (max-width: 414px) {
        margin-bottom: 13%;
    }
}

@media screen and (max-width: 600px) {
    width: 97%;
    height: 86%;
    border-radius: 15px;
}

@media screen and (max-width: 414px) {
    height: 96%;
}
`

export const Label = styled.p`
font-weight: 500;
font-size: 0.9rem;
line-height: 14px;
color: #ffffff;
margin-top:  ${props => props.error ? '2%' : '5%'};
margin-bottom: 5px;

@media screen and (max-width: 600px) {
    margin-left: 1%;
    font-size: 1.2rem;
    margin-bottom: 3%;
}
`

export const Input = styled.input`
width: 391.42px;
height: 38.32px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
border: ${props => props.error ? '2px solid #cc1717' : 'none'};
padding-left: 10px;

@media screen and (max-width: 600px) {
    width: 98%;
    margin-left: 1%;
    height: 2.3rem;
    font-size: 1.1rem;
}

@media screen and (max-width: 414px) {
    height: 2.3rem;
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
`
