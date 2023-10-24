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
height: 77%;
`

export const ContainerItems = styled.div`
background: #373737;
border-radius: 0 10px 10px 0;
height: 77%;
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
}

img {
    height: 18%;
}
`

export const Label = styled.p`
font-weight: 500;
font-size: 0.9rem;
line-height: 14px;
color: #ffffff;
margin-top:  ${props => props.error ? '2%' : '5%'};
margin-bottom: 5px;
`

export const Input = styled.input`
width: 391.42px;
height: 38.32px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
border: ${props => props.error ? '2px solid #cc1717' : 'none'};
padding-left: 10px;
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

`
