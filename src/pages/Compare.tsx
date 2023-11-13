import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GlobalState } from "../state";

const Compare = () => {
  const navigate = useNavigate();
  const data = useSelector(
    (state: { global: GlobalState }) => state.global.products
  );
  console.log(data);

  return (
    <div>
      Compare
      <button onClick={() => navigate("/cart")}>carts</button>
    </div>
  );
};

export default Compare;
