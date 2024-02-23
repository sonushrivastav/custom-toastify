import { useState } from "react"
import { useToastify } from "../../context/ToastifyContext"
import "./comp2.css"
const Comp2 = () => {
  const {showToastify} = useToastify()
  const [text,setText] = useState("")

  const handleClick = () => {
    if(text){
      showToastify(text)
      setText("")
    }
    return
  }
  return (
    <div className="comp2">
      <input value={text} type="text" onChange={(e)=>setText(e.target.value)} className="input"/>
      <button onClick={handleClick} className="btn">Click</button>

    </div>
  )
}

export default Comp2
