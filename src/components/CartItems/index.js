import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import React from "react"
import { useHistory } from "react-router-dom"

import { useCart } from "../../hooks/CartContext"
import formatCurrency from "../../utils/formartCurrency"
import { Container, Header, Body, EmptyCart, BoxEmpty } from "./styles"

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart()
  const { push } = useHistory()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.id}>
            <div className="BoxImg">
              <img src={product.url} />
            </div>

            <div className="DivCart">
              <p className="ProductName">{product.name}</p>
              <div className="BoxGrid">
                <p>{formatCurrency(product.price)}</p>

                <div className="quantity-container">
                  <button onClick={() => decreaseProducts(product.id)}>
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button onClick={() => increaseProducts(product.id)}>
                    +
                  </button>
                </div>

                <p className="FinalPrice">
                  {formatCurrency(product.quantity * product.price)}
                </p>
              </div>
            </div>
          </Body>
        ))
      ) : (
        <BoxEmpty>
          <EmptyCart>Carrinho vazio</EmptyCart>
          <AddShoppingCartIcon
            style={{ height: 118, width: 110, cursor: "pointer" }}
            onClick={() => push("/produtos")}
          />
        </BoxEmpty>
      )}
    </Container>
  )
}
