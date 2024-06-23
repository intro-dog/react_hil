import React, { useState } from "react"
import { handleActivate, handleDelete } from "../../utils/clickFns"
import List from "../List/List"

export default function ListState({ list: propsList = [] }) {
  const [list, setList] = useState(propsList)

  return (
    <List
      list={list}
      handleActivate={(index) => handleActivate(index, setList)}
      handleDelete={(index) => handleDelete(index, setList)}
    />
  )
}
