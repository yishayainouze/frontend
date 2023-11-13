import { useNavigate } from "react-router-dom"
import Categories from "../components/Categories"

const Cart = () => {
    const navigate = useNavigate()
  return (
    <div>
        Cart
        <button onClick={()=> navigate("/login")}>login</button>
        <Categories/>

    </div>
  )
}

export default Cart
