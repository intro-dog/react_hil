import React, { useState } from "react"
import Form from "../Form/Form"
import List from "../List/List"

export default function CRUD() {
  const [newItem, setNewItem] = useState()

  return (
    <>
      <Form liftingNewItem={setNewItem} />
      <List newItem={newItem} />
    </>
  )
}
