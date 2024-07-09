import { Route, Routes } from "react-router-dom"
import "./App.css"
import Users from "./pages/Users/Users"
import UsersDetail from "./pages/UsersDetail/UsersDetail"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users/:id" element={<UsersDetail />} />
    </Routes>
  )
}

export default App
