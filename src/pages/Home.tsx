import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Home = () => {
  const navigate = useNavigate();
  // const data = useSelector((state) => state.global.)

  return (
    <div>
      <button onClick={() => navigate("/products")}>products</button>
      <Categories />
    </div>
  );
};

export default Home;

import {  useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
      Home
      <button onClick={()=> navigate("/products")}>products</button>
    </div>
  )
}

export default Home
