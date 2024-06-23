import "./App.css"
import ListState from "./components/ListState/ListState"
import { animals } from "./data/mockData"

function App() {
  return (
    <div className="App">
      <ListState list={animals} />
    </div>
  )
}

export default App
