import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as te from 'tw-elements';
import './index.css'
import store from './feature/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>

  </React.StrictMode>,
)
