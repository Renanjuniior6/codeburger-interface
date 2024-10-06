import React from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import paths from "../constants/paths"
import { Home, Products, Login, Register, Cart, Admin } from "../containers"
import PrivateRoutes from "./private-routes"

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login"></Route>
        <Route component={Register} path="/cadastro"></Route>
        <PrivateRoutes exact component={Home} path="/" />
        <PrivateRoutes component={Products} path="/produtos" />
        <PrivateRoutes component={Cart} path="/carrinho" />

        <PrivateRoutes component={Admin} path={paths.Order} isAdmin />
        <PrivateRoutes component={Admin} path={paths.Products} isAdmin />
        <PrivateRoutes component={Admin} path={paths.NewProduct} isAdmin />
        <PrivateRoutes component={Admin} path={paths.EditProduct} isAdmin />
        <PrivateRoutes component={Admin} path={paths.NewCategory} isAdmin />
      </Switch>
    </Router>
  )
}

export default Routes
