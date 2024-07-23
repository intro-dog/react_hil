import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import * as yup from "yup"
import Header from "../../components/Header/Header"
const schema = yup.object().shape({
  firstName: yup
    .string()
    .max(30, "The name must be no more than 30 characters")
    .matches(/^[a-zA-Z]+$/, "The name must consist of only letters")
    .required("Fist Name is required"),
  phone: yup
    .string()
    .matches(
      /^[0-9]+$/,
      "The phone number must consist of only numbers without spaces"
    )
    .min(10, "The phone number must contain at least 10 digits")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  priority: yup.boolean(),
})

const Order = () => {
  const cart = useSelector((store) => store.cart)
  const { totalPrice } = cart

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    data.totalPrice = totalPrice
    console.log(data)
    reset()
  }

  return (
    <>
      <Header />
      <Link className="back" to={"/order"}>
        Back to order
      </Link>
      <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="order-form-title">Ready to order? Let's go!</h2>
        <div className="order-form-content">
          <div className="order-form-item">
            <label className="order-form-label" htmlFor="firstName">
              First Name:
            </label>
            <input id="firstName" {...register("firstName")} />
            {errors.firstName && (
              <p className="order-form-error">{errors.firstName.message}</p>
            )}
          </div>

          <div className="order-form-item">
            <label className="order-form-label" htmlFor="phone">
              Phone number:
            </label>
            <input id="phone" {...register("phone")} />
            {errors.phone && (
              <p className="order-form-error">{errors.phone.message}</p>
            )}
          </div>

          <div className="order-form-item">
            <label className="order-form-label" htmlFor="address">
              Address:
            </label>
            <input id="address" {...register("address")} />
            {errors.address && (
              <p className="order-form-error">{errors.address.message}</p>
            )}
          </div>
        </div>

        <div className="order-form-item--checkbox">
          <input type="checkbox" id="priority" {...register("priority")} />
          <label className="order-form-label--checkbox" htmlFor="priority">
            Do you want to give your order priority?
          </label>
        </div>

        <button className="button" type="submit">
          Order now for ${totalPrice}
        </button>
      </form>
    </>
  )
}

export default Order
