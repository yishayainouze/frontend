import React from 'react'
import Compare_products from '../Compare_products/compare_products'
import { Link } from 'react-router-dom'

function Categories_page() {
  return (
    <div>Categories_page
        <Link to='/Product_Page'>
<div style={{widows:'100px', height:'100px',border:'solid 2px red'}}>
Product_Page
</div>
</Link> 
    </div>
  )
}

export default Categories_page