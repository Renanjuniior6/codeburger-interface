import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Products, Login, Register, Cart } from '../containers'
import PrivateRoutes from './private-routes'

function Routes () {
  return (

        <Router>
            <Switch>
                <Route component={Login} path="/login"></Route>
                <Route component={Register} path="/cadastro"></Route>
                <PrivateRoutes exact component={Home} path="/" />
                <PrivateRoutes component={Products} path="/produtos" />
                <PrivateRoutes component={Cart} path="/carrinho" />
            </Switch>
        </Router>
  )
}

export default Routes
