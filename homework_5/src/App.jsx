import { Route, Routes } from "react-router-dom"
import "./App.css"
import Menu from "./components/Menu/Menu"
import { useLogin } from "./context/LoginContext"
import Cart from "./pages/Cart/Cart"
import Login from "./pages/Login/Login"
import Order from "./pages/Order/Order"
import OrderInfo from "./pages/OrderInfo/OrderInfo"
function App() {
  const { login } = useLogin()
  console.log(login)
  return (
    <Routes>
      <Route path="/" element={login ? <Menu /> : <Login />} />
      <Route path="/order" element={<Cart />} />
      <Route path="/order/new" element={<Order />} />
      <Route path="/order/:id" element={<OrderInfo />} />
    </Routes>
  )
}

export default App
