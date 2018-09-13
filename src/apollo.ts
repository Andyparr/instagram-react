import { ApolloClient, split, InMemoryCache } from 'apollo-boost'
import { createUploadLink } from 'apollo-upload-client'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = createUploadLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.REACT_APP_SERVER_URL}`
      : `http://localhost:4000/graphql`,
  credentials: 'include'
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? `wss://${process.env.REACT_APP_SERVER_URL}`
      : `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query) as any
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})
