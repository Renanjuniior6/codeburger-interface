import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}
`

export const Label = styled.p`
font-size: 15px;
color: #ffffff;
margin-bottom: 3px;
`

export const Input = styled.input`
height: 40px;
background: #ffffff;
box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
border-radius: 8px;
border: none;
width: 100%;
min-width: 280px;
padding-left: 10px;
`

export const ButtonStyles = styled(Button)`
width: 100%;
margin-top: 25px;
`
