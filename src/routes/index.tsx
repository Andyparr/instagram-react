import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../modules/home/App'
import { Feed } from '../modules/Feed'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/feed" component={Feed} />
    </Switch>
  </BrowserRouter>
)
