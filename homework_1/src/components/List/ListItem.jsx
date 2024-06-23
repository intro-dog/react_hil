import React from "react"
import { renderItem } from "../../utils/render"
import Button from "../Button/Button"

export default function ListItem({
  index,
  item,
  handleActivate,
  handleDelete,
}) {
  const style = {
    display: "flex",
    gap: "10px",
    marginBottom: "2px",
    listStyle: "none",
    color: item.active ? "green" : "black",
    fontWeight: item.active ? "bold" : "normal",
  }

  return (
    <li style={style}>
      {renderItem(item)}
      <Button
        title={item.active ? "Deactivate" : "Activate"}
        handleClick={() => handleActivate(index)}
      />
      <Button title={"Delete"} handleClick={() => handleDelete(index)} />
    </li>
  )
}
