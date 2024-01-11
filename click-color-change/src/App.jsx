import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  const colorChange = (colour) => {
    setColor(colour)
    // root = document.getElementById("root")
    // root.style.backgroundColor = colour
  }
  return (
    <>
      <svg style={{backgroundColor: color}}>
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"
         onClick={()=> colorChange("red")}/>
        <circle cx="150" cy="50" r="40" stroke="black" stroke-width="3" fill="green"
        onClick={() => colorChange("green")}/>
        <circle cx="250" cy="50" r="40" stroke="black" stroke-width="3" fill="blue"
         onClick={() => colorChange("blue")}/>
      </svg>
    </>
  )
}

export default App
