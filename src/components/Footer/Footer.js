import React from 'react'
import './Footer.sass'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
      <footer>
          <Link to="/mash-rajab-cannabis-shop">Products </Link>
          or
          <Link to="/mash-rajab-cannabis-shop/add-product"> Add Product </Link>
      </footer>
    )
}

export default Footer
