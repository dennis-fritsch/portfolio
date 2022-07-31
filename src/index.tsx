import React from 'react'
import ReactDOM from 'react-dom'
import App from 'base/App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.hygraph.com/v2/cl5zdanrp31t101uteksg68hn/master',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
