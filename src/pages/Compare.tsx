import { useNavigate } from "react-router-dom"

const Compare = () => {
    const navigate = useNavigate()
  return (
    <div>
        Compare
        <button onClick={()=> navigate("/cart")}>carts</button>

    </div>
  )
}

export default Compare
