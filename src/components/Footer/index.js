import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import React from 'react'

import LogoImg from '../../assets/logo-image.svg'
import { Container, Img, LinkStyle, P, ContainerIcons, Line, Rights } from './styles'

export function Footer () {
  return (
    <>
        <Container>
         <Img src={LogoImg}/>
         <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies adipiscing nunc dolor.</P>
         <ContainerIcons>
         <LinkStyle href='https://www.instagram.com/renan_jrrrr/' target='blank_'><InstagramIcon style={{ height: 40, width: 40 }}/></LinkStyle>
         <LinkStyle href='https://www.facebook.com/profile.php?id=100011666990202' target='blank_'><FacebookIcon style={{ height: 40, width: 40 }}/></LinkStyle>
         <LinkStyle href='https://www.linkedin.com/in/renan-j%C3%BAnior/' target='blank_'><LinkedInIcon style={{ height: 40, width: 40 }}/></LinkStyle>
         </ContainerIcons>
         <Line></Line>
        </Container>

        <Rights>
        <p>Copyrights © 2023 All Rights Reserved by <b>Renan Junior</b></p>
        </Rights>
        </>
  )
}
