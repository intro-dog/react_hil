import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useLogin } from "../../context/LoginContext"
import Input from "./../Input/Input"
export default function Header() {
  const cartItems = useSelector((state) => state.cart.items)
  const { login } = useLogin()
  return (
    <header className="header">
      <a to={"/"} className="logo">
        Pizza Day
      </a>
      <Input type={"text"} placeholder={"Search for the order #"} />
      <Link className="busket" to={"/order"}>
        <FaShoppingCart size={26} color="rgb(68, 64, 60)" />
        <span className="busket__count">{cartItems.length}</span>
      </Link>
      {login && <span className="header__user">{login}</span>}
    </header>
  )
}
