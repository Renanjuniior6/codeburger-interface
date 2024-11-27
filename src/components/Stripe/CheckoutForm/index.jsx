import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import React, { useState } from "react"
import { useLocation, useHistory } from "react-router-dom"
import "../styles.css"
import { toast } from "react-toastify"

import { useCart } from "../../../hooks/CartContext"
import api from "../../../services/api"

export function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const { cartProducts } = useCart()

  const { push } = useHistory()

  const {
    state: {
      data: { dpmCheckerLink },
    },
  } = useLocation()

  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      console.error("Stripe or Elements error, try again")
      return
    }

    setIsLoading(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    })

    if (error) {
      setMessage(error.message)
      toast.error(error.message)
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      const products = cartProducts.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity,
          price: product.price,
        }
      })

      await toast.promise(api.post("orders", { products }), {
        pending: "Realizando seu pedido...",
        success: "Pedido realizado com sucesso",
        error: "Falha ao realizar pedido, tente novamente",
      })

      setTimeout(() => {
        push(
          `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
        )
      }, 3000)
    } else {
      push(
        `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
      )
    }

    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: "tabs",
  }

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pagar agora"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
      <div id="dpm-annotation">
        <p>
          Os métodos de pagamento são disponibilizados de acordo com a sua
          região.&nbsp;
          <a
            href={dpmCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="dpm-integration-checker"
          >
            Ver métodos de pagamento
          </a>
        </p>
      </div>
    </div>
  )
}
