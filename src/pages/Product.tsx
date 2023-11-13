import { useNavigate } from "react-router-dom"
import ImgMediaCard from "../components/ProductTemp2"
import ProductCard from "../components/ProductTemp"

const Product = () => {
    const navigate = useNavigate()
  return (
    <div>
      Product
      <button onClick={()=> navigate("/cart")}>cart</button>
      <button onClick={()=> navigate(-1)}>compare</button>
      <div style={{height: "80vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ProductCard/>
      </div>
      <button onClick={()=> navigate("cart")}>cart</button>
      <button onClick={()=> navigate(-1)}>compare</button>
    </div>
  )
}

export default Product
