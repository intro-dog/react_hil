import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPizzas } from "../../../store/slices/PizzaSlice/index"
import MenuItem from "../MenuItem/MenuItem"

export default function MenuList() {
  const dispatch = useDispatch()
  const { pizzas, isLoading, error } = useSelector((store) => store.pizza)

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])

  return (
    <>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {pizzas?.length > 0 &&
        pizzas?.map((pizza) => <MenuItem key={pizza.id} item={pizza} />)}
    </>
  )
}
