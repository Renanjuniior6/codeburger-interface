import React from "react"

import CartLogo from "../../assets/home-image-3.svg"
import { CartItems, CartResume, OffersCarousel, Footer } from "../../components"
import { Container, CartImg, Wrapper } from "./styles"

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
      <OffersCarousel />
      <Footer />
    </Container>
  )
}
