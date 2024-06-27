import React, { useState } from "react"
import "./App.css"
import Tasks from "./components/Tasks/Tasks"
import {
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_TODO,
} from "./constants/constants"
import { tasksData } from "./data/tasksData"

function App() {
  const [tasks, setTasks] = useState(tasksData)

  const changeStatus = (id, newStatus) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <div className="tasks__column">
        <h2>
          To Do: {tasks.filter((task) => task.status === STATUS_TODO).length}
        </h2>

        {tasks
          .filter((task) => task.status === STATUS_TODO)
          .map((task) => (
            <Tasks key={task.id} task={task} changeStatus={changeStatus} />
          ))}
      </div>
      <div className="tasks__column">
        <h2>
          In Progress:{" "}
          {tasks.filter((task) => task.status === STATUS_IN_PROGRESS).length}
        </h2>
        {tasks
          .filter((task) => task.status === STATUS_IN_PROGRESS)
          .map((task) => (
            <Tasks key={task.id} task={task} changeStatus={changeStatus} />
          ))}
      </div>
      <div className="tasks__column">
        <h2>
          Done : {tasks.filter((task) => task.status === STATUS_DONE).length}
        </h2>
        {tasks
          .filter((task) => task.status === STATUS_DONE)
          .map((task) => (
            <Tasks
              key={task.id}
              task={task}
              changeStatus={changeStatus}
              deleteTask={deleteTask}
            />
          ))}
      </div>
    </div>
  )
}

export default App
