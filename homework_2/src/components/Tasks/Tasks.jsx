import {
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_TODO,
} from "../../constants/constants.js"

export default function Tasks({ task, changeStatus, deleteTask }) {
  return (
    <div className="tasks">
      <h3 className="tasks__title">{task.title}</h3>
      {task.status === STATUS_TODO && (
        <button
          className="tasks__button"
          onClick={() => changeStatus(task.id, STATUS_IN_PROGRESS)}
        >
          In Progress
        </button>
      )}
      {task.status === STATUS_IN_PROGRESS && (
        <>
          <button
            className="tasks__button"
            onClick={() => changeStatus(task.id, STATUS_TODO)}
          >
            To Do
          </button>
          <button
            className="tasks__button"
            onClick={() => changeStatus(task.id, STATUS_DONE)}
          >
            Done
          </button>
        </>
      )}
      {task.status === STATUS_DONE && (
        <button className="tasks__button" onClick={() => deleteTask(task.id)}>
          To Archive
        </button>
      )}
    </div>
  )
}
