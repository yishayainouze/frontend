import { useNavigate } from "react-router-dom"
import Categories from "../components/Categories"

const Compare = () => {
    const navigate = useNavigate()
  return (
    <div>
        Compare
        <button onClick={()=> navigate("/cart")}>carts</button>
        <Categories/>


    </div>
  )
}

export default Compare
