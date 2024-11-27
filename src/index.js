import { Elements } from "@stripe/react-stripe-js"
import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer } from "react-toastify"

import stripePromise from "./config/stripeConfig"
import AppProvider from "./hooks"
import Routes from "./routes/routes"
import GlobalStyles from "./styles/globalStyle"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <Routes />
      </Elements>
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
)
