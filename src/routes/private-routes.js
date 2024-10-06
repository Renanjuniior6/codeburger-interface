import PropTypes from "prop-types"
import React from "react"
import { Route, Redirect } from "react-router-dom"

import { Header } from "../components/Header"

function PrivateRoutes({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem("codeburger:userData")

  if (!user) {
    return <Redirect to="/login" />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Route {...rest} component={component} />
    </>
  )
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool,
}
