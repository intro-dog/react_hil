import React from "react"
import ListItem from "./ListItem"

export default function List({ list = [], handleActivate, handleDelete }) {
  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          item={item}
          handleActivate={handleActivate}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  ) : (
    <h3 className="items">No items</h3>
  )
}
