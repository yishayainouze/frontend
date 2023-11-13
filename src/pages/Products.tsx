import { useNavigate } from "react-router-dom"
import Categories from "../components/Categories"

const Products = () => {
  const navigate = useNavigate();
  const data = useSelector(
    (state: { global: GlobalState }) => state.global.products
  );

  return (
    <div>
        Products
        <button onClick={()=> navigate("/product")}>product</button>


        <Categories/>
    </div>
  );
};

export default Products;
