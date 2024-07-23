import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import { LoginProvider } from "./context/LoginContext.jsx"
import store from "./store"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LoginProvider>
  </BrowserRouter>
)
