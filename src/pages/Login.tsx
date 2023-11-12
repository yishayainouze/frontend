import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
  return (
    <div>
      Login
      <button onClick={()=> navigate("/sign-up")}>sign-up</button>

    </div>
  )
}

export default Login
