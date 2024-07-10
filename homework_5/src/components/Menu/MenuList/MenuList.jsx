import React from "react"
import { pizzas } from "../../../data/data"
import MenuItem from "../MenuItem/MenuItem"
export default function MenuList() {
  return (
    <>
      {pizzas.length ? (
        pizzas.map((pizza) => <MenuItem key={pizza.id} item={pizza} />)
      ) : (
        <p>No pizzas</p>
      )}
    </>
  )
}
