import React from 'react'

import HomeLogo from '../../assets/home-image-2.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home () {
  return (
        <Container>
          <HomeImg src={HomeLogo} alt='logo da home'/>
          <CategoryCarousel />
          <OffersCarousel />
        </Container>
  )
}
