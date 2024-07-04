import React, { useEffect, useState } from "react"
import { ALL, IMPORTANT, NOT_IMPORTANT } from "../../constants/constants"
import services from "../../services/list"
import Button from "../Button/Button"

export default function List({ newItem }) {
  const [list, setList] = useState([])
  const [sortOrder, setSortOrder] = useState("all")

  const handleSortChange = (e) => {
    setSortOrder(e.target.value)
  }

  const getFilteredList = () => {
    if (sortOrder === IMPORTANT) {
      return list.filter((item) => item.completed)
    } else if (sortOrder === NOT_IMPORTANT) {
      return list.filter((item) => !item.completed)
    } else {
      return list
    }
  }

  const filteredList = getFilteredList()

  const handleItemDelete = async (id) => {
    try {
      await services.delete(id)
      await services.get()
      setList((prevState) => prevState.filter((item) => item.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const handleItemPatch = async (id, obj) => {
    try {
      await services.patch(id, obj)
      setList((prevState) =>
        prevState.map((item) => (item.id === id ? { ...item, ...obj } : item))
      )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    services.get().then((data) => setList(data))
  }, [])

  useEffect(() => {
    if (newItem) {
      setList((prevState) => [...prevState, newItem])
    }
  }, [newItem])

  return (
    <div className="list">
      <select value={sortOrder} onChange={handleSortChange}>
        <option value={ALL}>All</option>
        <option value={IMPORTANT}>Important</option>
        <option value={NOT_IMPORTANT}>Not important</option>
      </select>
      <ul className="ul" key={list.id}>
        {filteredList
          .map((item) => (
            <li className={item.completed ? "green" : "black"} key={item.id}>
              {item.title}{" "}
              <input
                value={item.completed}
                type="checkbox"
                defaultChecked={item.completed}
                onChange={() =>
                  handleItemPatch(item.id, { completed: !item.completed })
                }
              />{" "}
              <Button
                title={"Delete"}
                handleClick={() => handleItemDelete(item.id)}
              />
            </li>
          ))
          .slice(-10)}
      </ul>
    </div>
  )
}
