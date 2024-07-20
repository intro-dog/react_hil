import React from "react"
import useFetch from "../../../hooks/useFetch"
import MenuItem from "../MenuItem/MenuItem"

export default function MenuList() {
  const {
    isLoading,
    error,
    data: pizzas,
  } = useFetch("https://react-fast-pizza-api.onrender.com/api/menu")

  if (isLoading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error: {error}</p>

  return (
    <>
      {pizzas?.data.length > 0 ? (
        pizzas?.data.map((pizza) => <MenuItem key={pizza.id} item={pizza} />)
      ) : (
        <p>No pizzas</p>
      )}
    </>
  )
}
