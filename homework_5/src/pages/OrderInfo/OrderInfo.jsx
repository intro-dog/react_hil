import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { fetchOrder } from "../../store/slices/OrderSlice/index"
import formatDate from "../../utils/formatDate"

const OrderDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const order = useSelector((state) => state.order.order)
  const orderStatus = useSelector((state) => state.order.status)
  const orderError = useSelector((state) => state.order.error)

  useEffect(() => {
    if (id) {
      dispatch(fetchOrder(id))
    }
  }, [id, dispatch])

  return (
    <>
      <Header />
      <Link className="back" to="/">
        Back to Home
      </Link>
      {orderStatus === "loading" ? (
        <p>...Loading</p>
      ) : orderStatus === "failed" ? (
        <p>{orderError}</p>
      ) : (
        order && (
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
                order?.cart.map((item, index) => (
                  <div className="order-details-item" key={index}>
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
                To pay on delivery: €{order?.orderPrice + order?.priorityPrice}
                .00
              </span>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default OrderDetails
