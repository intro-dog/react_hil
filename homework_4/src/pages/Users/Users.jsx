import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )

        if (!response.ok) {
          throw new Error("Something went wrong")
        }

        const data = await response.json()

        setUsers(data)
      } catch (error) {
        console.log(error.mesage)
      }
    }
    getUsers()
  }, [])

  return (
    <section className="container users">
      <h1 className="title">Users</h1>
      {users.length ? (
        users.map((user) => (
          <div className="users__item" key={user.id}>
            {user.name}
            <Link className="users__link" to={`/users/${user.id}`}>
              Details
            </Link>
          </div>
        ))
      ) : (
        <h2 className="loading">List is empty</h2>
      )}
    </section>
  )
}
