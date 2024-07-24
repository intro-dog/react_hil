import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import formatDate from "../../utils/formatDate"
const OrderDetails = () => {
  const { id } = useParams()
  const [order, setOrder] = useState(null)
  console.log(order)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(
          `https://react-fast-pizza-api.onrender.com/api/order/${id}`
        )

        if (!response.ok) {
          throw new Error("Error fetching order")
        }

        const data = await response.json()
        setOrder(data.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchOrder()
  }, [id])

  return (
    <>
      <Header />
      <Link className="back" to="/">
        Back to Home
      </Link>
      {order ? (
        <div className="order-details">
          <div className="order-details-header">
            <h2 className="order-details-title">
              Order #{order?.id} status: {order?.status}
            </h2>
            <div className="order-details-status">
              <span
                className={
                  order?.priority ? "background-green" : "background-red"
                }
              >
                Priority
              </span>
              <span
                className={
                  order?.status === "Delivered"
                    ? "background-red"
                    : "background-green"
                }
              >
                {order?.status} order
              </span>
            </div>
          </div>

          <div className="order-details-estimated">
            <span>Name: {order?.customer}</span>
            <span>
              Estimated delivery: {formatDate(order?.estimatedDelivery)}
            </span>
          </div>

          <div className="order-details-items">
            {order?.cart.length &&
              order?.cart.map((item) => (
                <div className="order-details-item" key={item.id}>
                  <p>
                    {item.quantity} x {item.name}
                  </p>
                  <p className="item-details">€{item.totalPrice}.00</p>
                </div>
              ))}
          </div>

          <div className="order-details-total">
            <span className="order-details-total-price">
              Price pizza: €{order?.orderPrice}.00{" "}
            </span>
            <span className="order-details-total-price">
              Price priority: €{order?.priorityPrice}.00
            </span>
            <span className="order-details-total-bold">
              To pay on delivery:{" "}
              {`€${order?.orderPrice + order?.priorityPrice}.00`}
            </span>
          </div>
        </div>
      ) : (
        <p>...Loading</p>
      )}
    </>
  )
}

export default OrderDetails
