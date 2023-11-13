import {  useNavigate } from "react-router-dom"
import Categories from "../components/Categories"

const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
      <button onClick={()=> navigate("/products")}>products</button>
      <Categories/>
    </div>
  )
}

export default Home
