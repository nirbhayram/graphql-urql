import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { getToken } from './token'
import { Provider, Client, defaultExchanges } from 'urql'

const client = new Client({
  url: 'http://localhost:4000',
  fetchOptions: () => {
    const token = getToken()
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' }
    }
  },
  exchanges: defaultExchanges
})

ReactDOM.render(
  <BrowserRouter>
    <Provider value={client}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)