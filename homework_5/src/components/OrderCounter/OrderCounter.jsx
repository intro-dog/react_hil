import React, { useState } from "react"

export default function OrderCounter({ onClick }) {
  const [orderCount, setOrderCount] = useState(0)

  if (orderCount < 0) {
    setOrderCount(0)
  }

  const handleCounterIncrement = () => {
    setOrderCount(orderCount + 1)
  }

  const handleCounterDecrement = () => {
    setOrderCount(orderCount - 1)
  }

  return (
    <div className="order-counter">
      <button
        className="order-counter__button"
        onClick={handleCounterIncrement()}
      >
        -
      </button>
      <p className="order-counter__count">{orderCount}</p>
      <button>
        <span
          className="order-counter__button"
          onClick={handleCounterDecrement()}
        >
          +
        </span>
      </button>
    </div>
  )
}
