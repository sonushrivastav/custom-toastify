import "./comp1.css"
import { useToastify} from "../../context/ToastifyContext"


const Comp1 = () => {
  const {showToastify,} = useToastify()

  const handleClick = () => {
    showToastify("Hello Toastify !")
  }
  return (
    <div className="comp1">
      <button onClick={handleClick} className="btn">Click</button>
    </div>
  )
}

export default Comp1
