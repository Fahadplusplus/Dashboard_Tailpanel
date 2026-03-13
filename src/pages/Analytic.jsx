import { useState } from "react"
import Counter from "../components/layout/Counter";


const Analytic = () => {
    const [color, setColor] = useState("gray")
  return (
    <>
      <div className="w-100 h-100 " style={{backgroundColor: color}} >
        <div>
            <button onClick={() => setColor("red")}>red</button>
            <button onClick={() => setColor("green")}>green</button>
            <button onClick={() => setColor("blue")}>blue</button>
        </div>
      </div>
      <Counter />
    </>
  )
}

export default Analytic