
import { useNavigate } from "react-router-dom";
import SignUpModal from "./Sign";
import Login from "./Login";


const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>

      </div>
      <div>
        Cart
        <button onClick={() => navigate("/")}>Categories</button>
      </div>

    </div>
  );
};

export default Cart;

