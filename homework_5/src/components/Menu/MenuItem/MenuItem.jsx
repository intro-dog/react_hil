import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addItemToCart,
  decrement,
  increment,
  removeItemFromCart,
} from "../../../store/slices/CartSlice"
import Button from "../../Button/Button"

export default function MenuItem({ item }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  console.log(cartItems)
  const handleAddToCart = () => {
    dispatch(addItemToCart(item))
  }

  const handleIncrement = (id) => {
    dispatch(increment({ id }))
  }

  const handleDecrement = (id) => {
    dispatch(decrement({ id }))
  }

  const handleOrderDelete = (id) => {
    dispatch(removeItemFromCart({ id }))
  }

  return (
    <div className="pizza">
      {!item.soldOut ? (
        <>
          <img
            className="pizza__image"
            src={item.imageUrl}
            alt="Image of pizza"
          />
          <div className="pizza__info">
            <h2 className="pizza__name">{item.name}</h2>
            <p className="pizza__ingredients">{item.ingredients.join(", ")}</p>
            <p className="pizza__price">€{item.unitPrice}.00</p>
          </div>
          <div className="pizza__button">
            {cartItems.filter((i) => i.id === item.id).length === 0 ? (
              <Button
                className={"button"}
                text={"Add to cart"}
                onClick={handleAddToCart}
              />
            ) : (
              <div className="pizza__order-controls">
                <Button
                  className={"button"}
                  text={"-"}
                  onClick={() => handleDecrement(item.id)}
                />
                <span>{cartItems.find((i) => i.id === item.id)?.quantity}</span>
                <Button
                  className={"button"}
                  text={"+"}
                  onClick={() => handleIncrement(item.id)}
                />
                <Button
                  className={"button"}
                  text={"Delete"}
                  onClick={() => handleOrderDelete(item.id)}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="pizza--deactivated">
          <img
            className="pizza__image--deactivated"
            src={item.imageUrl}
            alt="Image of pizza"
          />
          <div className="pizza__info--deactivated">
            <h2 className="pizza__name">{item.name}</h2>
            <p className="pizza__ingredients">{item.ingredients.join(", ")}</p>
            <p className="pizza__sold-out">Sold out</p>
          </div>
        </div>
      )}
    </div>
  )
}
