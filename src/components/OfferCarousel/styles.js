import styled from 'styled-components'

export const Container = styled.div`
background-color: #efefef;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;
background-color: #ffffff;

.rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25))
}
.rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
}
.rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
}
`

export const CategoryImg = styled.img`

`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;

p {
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #424242;
}
`
export const Image = styled.img`
width: 200px;
height: 200px;
border-radius: 10px;
margin-bottom: 16px;
`
export const Button = styled.button`
margin-top: 16px;
background: #9758a6;
border-radius: 8px;

height: 50px;
border: none;
font-weight: bold;
font-size: 18px;
line-height: 100%;
text-align: center;
color: #ffffff;

cursor: pointer;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.6;
}
`
