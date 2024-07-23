import React from "react"

export default function Input({ type, placeholder, onChange }) {
  return <input onChange={onChange} type={type} placeholder={placeholder} />
}
