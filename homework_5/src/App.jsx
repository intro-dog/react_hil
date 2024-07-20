import { Route, Routes } from "react-router-dom"
import "./App.css"
import Menu from "./components/Menu/Menu"
import Cart from "./pages/Cart/Cart"
import Login from "./pages/Login/Login"
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Menu />} />
      <Route path="/order" element={<Cart />} />
    </Routes>
  )
}

export default App
