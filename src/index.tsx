import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Routes } from './routes'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'

import '../node_modules/normalize.css/normalize.css'
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
