import Input from "./../Input/Input"
export default function Header() {
  return (
    <header className="header">
      <a to={"/"} className="logo">
        Pizza Day
      </a>
      <Input type={"text"} placeholder={"Search for the order #"} />
    </header>
  )
}
