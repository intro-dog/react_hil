import React from "react"

export default function ListItem({ list = [] }) {
  return (
    <>
      <li className="ul">
        <p>{list.title}</p>
        <input type="checkbox" defaultChecked={list.complited} />
      </li>
    </>
  )
}
