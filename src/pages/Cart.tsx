
import { useNavigate } from "react-router-dom";
import SignUpModal from "./Sign";
import Login from "./Login";


const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>

        <SignUpModal />
        <Login />
      </header>
        Cart
        <button onClick={() => navigate("/")}>Categories</button>

    </div>
  );
};

export default Cart;
