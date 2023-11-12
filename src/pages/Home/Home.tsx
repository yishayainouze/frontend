import React from 'react'
import { Link } from 'react-router-dom';
import Categories_page from '../Categories_page/Categories_page';


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
      <body>
        <div>

          <Categories_page />
          Home
        </div>
      </body>

    </div>
  )
}

export default Home