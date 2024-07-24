import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import Header from "../../components/Header/Header"
import { useLogin } from "../../context/LoginContext"
const schema = yup.object().shape({
  firstName: yup
    .string()
    .max(30, "The name must be no more than 30 characters")
    .matches(/^[a-zA-Z]+$/, "The name must consist of only letters")
    .required("First Name is required"),
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
  const { totalPrice, items } = cart
  const { login } = useLogin()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const orderData = {
      address: data.address,
      date: new Date(),
      totalPrice: totalPrice,
      customer: data.firstName,
      phone: data.phone,
      priority: data.priority || false,
      position: "",
      cart: items.map((item) => ({
        pizzaId: item.id,
        name: item.name,
        quantity: item.quantity,
        totalPrice: item.quantity * item.unitPrice,
        unitPrice: item.unitPrice,
      })),
    }

    console.log(orderData)
    try {
      const response = await fetch(
        "https://react-fast-pizza-api.onrender.com/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      )

      const data = await response.json()

      if (data.status === "success") {
        const { id } = data.data
        navigate(`/order/${id}`)
      } else {
        console.log("Something went wrong")
      }
    } catch (error) {
      console.log(error.message)
    }

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
            <input id="firstName" {...register("firstName")} value={login} />
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
            Do you want to give your order priority? (costs €2)
          </label>
        </div>

        <button className="button" type="submit">
          Order now for €{totalPrice}
        </button>
      </form>
    </>
  )
}

export default Order
