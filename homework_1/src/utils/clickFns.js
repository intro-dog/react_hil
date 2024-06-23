const handleActivate = (index, setList) => {
  setList((prevList) =>
    prevList.map((item, i) =>
      i === index ? { ...item, active: !item.active } : item
    )
  )
}

const handleDelete = (index, setList) => {
  setList((prevList) => prevList.filter((_, i) => i !== index))
}

export { handleActivate, handleDelete }
