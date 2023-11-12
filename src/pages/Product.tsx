import { useNavigate } from "react-router-dom"

const Product = () => {
    const navigate = useNavigate()
  return (
    <div>
      Product
      <button onClick={()=> navigate("cart")}>cart</button>
      <button onClick={()=> navigate(-1)}>compare</button>
    </div>
  )
}

export default Product
