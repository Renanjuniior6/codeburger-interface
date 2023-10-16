import styled from 'styled-components'

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
`
export const ProductName = styled.p`
font-size: 16px;
line-height: 19px;

color: #000000;
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
border-radius: 10px;
`
