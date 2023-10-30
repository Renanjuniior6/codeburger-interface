import styled from 'styled-components'

import { Button } from '../Button'

export const Container = styled.div`
background-color: #ffff;
padding: 15px;
box-shadow: 0px 10px 40px rgba(0,0,0,0.3);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 300px;

.container-top {
display: grid;
grid-gap: 10px 50px;
grid-template-areas: 
'title title'
'items items-price'
'delivery-tax delivery-tax-price';

.title {
    grid-area: title;
    margin-bottom: 20px;
    font-weight: 500;
}

.items {
    grid-area: items;

}

.items-price {
    grid-area: items-price;

}

.delivery-tax {
    grid-area: delivery-tax;
    
}

.delivery-tax-price {
    grid-area: delivery-tax-price;
   
}

}

.container-bottom {
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 24px;
margin-top: 120px;
}
`

export const ButtonStyles = styled(Button)`
width: 100%;
margin-top: 30px;
height: 54px;
`
