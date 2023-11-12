import React from 'react'
import { Link } from 'react-router-dom'

function Product_Page() {
  return (
    <div>
        Product_Page
        <Link to='/compare_products'>
        <div style={{widows:'100px', height:'100px',border:'solid 2px red'}}>
compare_products
</div>
</Link> 
    </div>
  )
}

export default Product_Page