import React, { useState } from "react"
import Button from "../../Button/Button"

export default function MenuItem({ item }) {
  const [orderCounter, setOrderCounter] = useState(0)

  const handleAddToCart = () => {
    setOrderCounter(1)
  }

  const handleOrderIncrease = () => {
    setOrderCounter((prevState) => prevState + 1)
  }

  const handleOrderDecrease = () => {
    setOrderCounter((prevState) => (prevState > 1 ? prevState - 1 : 0))
  }

  const handleOrderDelete = () => {
    setOrderCounter(0)
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
            {orderCounter === 0 ? (
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
                  onClick={handleOrderDecrease}
                />
                <span>{orderCounter}</span>
                <Button
                  className={"button"}
                  text={"+"}
                  onClick={handleOrderIncrease}
                />
                <Button
                  className={"button"}
                  text={"Delete"}
                  onClick={handleOrderDelete}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}
