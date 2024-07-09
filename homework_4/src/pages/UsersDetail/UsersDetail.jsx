import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
export default function UsersDetail() {
  const [user, setUser] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getUsers = async (id) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )

        if (!response.ok) {
          throw new Error("Something went wrong")
        }

        const data = await response.json()

        setUser(data)
      } catch (error) {
        console.log(error.mesage)
      }
    }
    getUsers(id)
  }, [id])

  return (
    <div className="container">
      <Link className="users__link" to={`/`}>
        Back
      </Link>
      <h1 className="title">UserDetails</h1>
      <div className="user__info">
        <h3 className="title">General info</h3>
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Phone:</b> {user.phone}
        </p>
        <p>
          <b>Website:</b> {user.website}
        </p>
      </div>
      <div className="user__info">
        <h3 className="title">Address</h3>
        <p>
          <b>Street:</b> {user.address?.street} {user.address?.suite}
          {", "}
          {user.address?.city}, {user.address?.zipcode}
        </p>

        <p>
          <b>Company:</b> {user.company?.name}
        </p>
      </div>
    </div>
  )
}
