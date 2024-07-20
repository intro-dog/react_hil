import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import {
  clearCart,
  decrement,
  increment,
  removeItemFromCart,
} from "../../store/slices/CartSlice"

export default function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const totalItems = useSelector((state) => state.cart.totalItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  const handleIncrement = (id) => {
    dispatch(increment({ id }))
  }

  const handleDecrement = (id) => {
    dispatch(decrement({ id }))
  }

  const handleOrderDelete = (id) => {
    dispatch(removeItemFromCart({ id }))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <Header />
      <Link className="back" to={"/"}>
        Back to menu
      </Link>
      <h1 className="cart__title">Your Cart, {totalItems} </h1>
      <div className="cart">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__info">
                  <div className="cart-item__quantity">
                    <p>{item.quantity} x </p>
                  </div>
                  <h2 className="cart-item__name">{item.name}</h2>
                </div>
                <div className="cart-item__controls">
                  <p className="cart-item__price">
                    €{item.priceOfOnePosition}.00
                  </p>
                  <Button
                    className={"button"}
                    text={"-"}
                    onClick={() => handleDecrement(item.id)}
                  />
                  <span>{item.quantity}</span>
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
              </div>
            ))}
            <div className="cart-summary">
              <p>Total Price: €{totalPrice}.00</p>
            </div>
            <div>
              <Button
                className={"button button--clear"}
                text={"Clear Cart"}
                onClick={handleClearCart}
              />
            </div>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  )
}
