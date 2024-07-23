import { useState } from "react"
import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input"
import { useLogin } from "../../context/LoginContext"
import Button from "./../../components/Button/Button"

export default function Login() {
  const [login, setLoginState] = useState("")
  const { setLogin } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLogin(login)
  }

  return (
    <div className="wrapper">
      <Header />

      <main className="content">
        <h1 className="title">
          The best pizza.
          <br />
          <span className="text-yellow">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <div className="sub-title">
          <p>👋 Welcome! Please start by telling us your name:</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <Input
            type={"text"}
            value={login}
            onChange={(e) => setLoginState(e.target.value)}
            placeholder={"Your full name"}
          />
          <Button text={"Login"} className={"button"} />
        </form>
      </main>
    </div>
  )
}
