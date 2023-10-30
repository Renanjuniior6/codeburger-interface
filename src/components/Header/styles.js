import styled from 'styled-components'

export const Container = styled.div`
height: 72px;
background-color: #ffffff;
box-shadow: 2px 3px 5px rgba(0,0,0,0.15);
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;
`

export const ContainerLeft = styled.div`
display: flex;
gap: 30px;
`

export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
font-family: 'Prompt', sans-serif;
color: ${props => props.isActive ? '#9758a6' : '#555555'} ;
border-bottom: ${props => props.isActive ? '3px solid #9758a6' : 'none'} ;
padding-bottom: 5px;
font-size: 1.3rem;
line-height: 19px;
font-weight: ${props => props.isActive ? '400' : 'normal'} ;
`

export const Line = styled.div`
height: 40px;
border: 0.5px solid #bababa;
`

export const ContainerText = styled.div`
p{
    font-weight: 300;
    font-size: 19px;
    line-height: 16px;
    color: #555555;
    margin-bottom: 9px;
    font-family: 'Prompt', sans-serif;
}
`

export const PageLinkExit = styled.a`
font-weight: 500;
font-size: 16px;
line-height: 16px;
display: flex;
align-items: center;
cursor: pointer;
font-family: 'Prompt', sans-serif;

color: #9758a6;
`
