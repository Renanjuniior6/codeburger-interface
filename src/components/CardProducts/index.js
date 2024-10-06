import PropTypes from "prop-types"
import React from "react"
import { useHistory } from "react-router-dom"

import { useCart } from "../../hooks/CartContext"
import { Button } from "../Button"
import { Container, ProductName, Img, ProductPrice } from "./styles"

export function CardProducts({ product }) {
  const { putProductInCart } = useCart()

  const { push } = useHistory()

  return (
    <Container>
      <Img src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            push("/carrinho")
          }}
        >
          Comprar
        </Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object,
}
