import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <header>
      <Link to="/Sign_in">
      <button >sign-in</button>
            </Link>
      <Link to="/Sign_up">
      <button >sign-up</button>
            </Link>

        <button >sign-out</button>
      </header>
      Home
      
    </div>
  )
}

export default Home