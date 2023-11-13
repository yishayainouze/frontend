import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { GlobalState } from "../state";

const Cart = () => {
    const navigate = useNavigate()
    const data = useSelector((state: { global: GlobalState }) => state.global.products);

  return (
    <div>
        Cart
        <button onClick={()=> navigate("/login")}>login</button>
    </div>
  )
}

export default Cart
