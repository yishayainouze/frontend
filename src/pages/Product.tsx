import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { GlobalState } from "../state"

const Product = () => {
    const navigate = useNavigate()
    const product = useSelector((state: {global: GlobalState}) => state.global.productId)
  return (
    <div>
      Product
      <button onClick={()=> navigate("/cart")}>cart</button>
      <button onClick={()=> navigate(-1)}>compare</button>
      <div style={{height: "80vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        
      </div>
      <button onClick={()=> navigate("cart")}>cart</button>
      <button onClick={()=> navigate(-1)}>compare</button>
    </div>
  )
}

export default Product
