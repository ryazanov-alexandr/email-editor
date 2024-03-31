import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home/Home'
import { Provider } from './Provider'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Home />
    </Provider>
      
  </React.StrictMode>,
)
