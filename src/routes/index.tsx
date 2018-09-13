import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Feed } from '../modules/Feed'
import App from '../modules/home/App'
import { RegisterConnector } from '../modules/Register/RegisterConnector'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/feed" component={Feed} />
      <Route exact={true} path="/register" component={RegisterConnector} />
    </Switch>
  </BrowserRouter>
)
