import { useNavigate } from "react-router-dom"

const Cart = () => {
    const navigate = useNavigate()
  return (
    <div>
        Cart
        <button onClick={()=> navigate("/login")}>login</button>

    </div>
  )
}

export default Cart
