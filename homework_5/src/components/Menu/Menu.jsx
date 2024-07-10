import React from "react"
import Header from "../Header/Header.jsx"
import MenuList from "./MenuList/MenuList.jsx"
export default function Menu() {
  return (
    <>
      <Header />
      <main>
        <section className="menu">
          <MenuList />
        </section>
      </main>
    </>
  )
}
