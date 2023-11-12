import {  useNavigate } from "react-router-dom"
import Categories from "../components/Categories"

const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
      <Categories/>
      <button onClick={()=> navigate("/products")}>products</button>
    </div>
  )
}

export default Home
