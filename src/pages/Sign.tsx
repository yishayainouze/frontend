import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();
  return (
    <div>
      Sign
      <button onClick={() => navigate("/login")}>login</button>
    </div>
  );
};

export default Sign;
