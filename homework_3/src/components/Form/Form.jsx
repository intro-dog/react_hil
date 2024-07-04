import React, { useRef, useState } from "react"
import services from "../../services/list"

export default function Form({ liftingNewItem }) {
  const [newItem, setNewItem] = useState({
    title: "",
    completed: true,
  })
  const formRef = useRef()

  const handleItemTitle = (e) => {
    setNewItem((prevState) => ({ ...prevState, title: e.target.value }))
  }

  const handleItemCompleted = (e) => {
    setNewItem((prevState) => ({
      ...prevState,
      completed: e.target.checked,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await services.post(newItem)
    setNewItem({
      title: "",
      completed: true,
    })
    liftingNewItem(response)
  }
  const handleClear = () => {
    setNewItem({
      title: "",
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <label>
        Title:
        <input
          type="text"
          placeholder="Enter your title"
          value={newItem.title}
          onChange={handleItemTitle}
        />
      </label>
      <label>
        Importance{" "}
        <input
          type="checkbox"
          defaultChecked={newItem.completed}
          onChange={handleItemCompleted}
        />
      </label>
      <button>Create</button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </form>
  )
}
