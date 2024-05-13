import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
// Redux
import { store } from './services/data/store.js'
import { Provider } from 'react-redux'
// Redux-persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
