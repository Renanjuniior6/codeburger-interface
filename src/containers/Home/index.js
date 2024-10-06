import React from "react"

import {
  CategoryCarousel,
  Contact,
  OffersCarousel,
  Footer,
} from "../../components"
import { Container, HomeImg } from "./styles"

export function Home() {
  return (
    <Container>
      <HomeImg></HomeImg>
      <CategoryCarousel />
      <OffersCarousel />
      <Contact />
      <Footer />
    </Container>
  )
}
