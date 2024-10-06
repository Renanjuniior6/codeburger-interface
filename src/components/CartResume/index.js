import React, { useState, useEffect } from "react"
import { toast } from "react-toastify"

import { useCart } from "../../hooks/CartContext"
import api from "../../services/api"
import formartCurrency from "../../utils/formartCurrency"
import { Container, ButtonStyles } from "./styles"

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post("orders", { products: order }), {
      pending: "Realizando seu pedido...",
      success: "Pedido realizado com sucesso",
      error: "Falha ao realizar pedido, tente novamente",
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens:</p>
          <p className="items-price">{formartCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega:</p>
          <p className="delivery-tax-price">{formartCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formartCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <ButtonStyles onClick={submitOrder}>Finalizar pedido</ButtonStyles>
    </div>
  )
}
