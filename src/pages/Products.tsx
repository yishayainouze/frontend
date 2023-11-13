import { useNavigate } from "react-router-dom"
import Categories from "../components/Categories"


const Products = () => {
    const navigate = useNavigate()
  return (
    <div>
        Products
        <button onClick={()=> navigate("/product")}>product</button>
        <Categories/>
        <button onClick={()=> navigate("/product")}>products</button>
        <button onClick={()=> navigate("/compare")}>compare</button>
    </div>
  )
}

export default Products
