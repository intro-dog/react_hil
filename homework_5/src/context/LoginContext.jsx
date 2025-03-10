import React, { createContext, useContext, useState } from "react"

const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState("")

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => {
  return useContext(LoginContext)
}
