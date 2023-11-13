import { useNavigate } from "react-router-dom"

import Categories from "../components/Categories"
import SignUpModal from "./Sign"
import Login from "./Login"

const Cart = () => {
    const navigate = useNavigate()
  return (
    <div>
      <header>
        <SignUpModal/>
        <Login/>
      </header>
      <body>
      Cart
        <button onClick={()=> navigate("/")}>Categories</button>

      </body>
      
    </div>
  )
}

export default Cart
