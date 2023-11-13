import { useNavigate } from "react-router-dom"
import Categories from "../components/Categories"

const Products = () => {
    const navigate = useNavigate()
  return (
    <div>
        Products
        <button onClick={()=> navigate("/product")}>product</button>
        <Categories/>
    </div>
  )
}

export default Products
