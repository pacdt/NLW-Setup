import { Habit } from "./components/Habit"
import Navbar from "./components/Navbar"
import './styles/global.css'
import "./components/Habit.css"

function App() {
  return (
    <div>
      <Navbar />
    <Habit completed={3} />
    <Habit completed={10} />
    <Habit completed={20} />
    <Habit completed={30}/>
    </div>
  )
}

export default App
