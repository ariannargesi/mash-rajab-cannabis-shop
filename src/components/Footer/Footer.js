import React from 'react'
import './Footer.sass'

import { Link, BrowserRouter as Router  } from 'react-router-dom'

const Footer = () => {
    return (
      <footer>
          <Link to="/">Products </Link>
          or
          <Link to="/add-product"> Add Product </Link>
      </footer>
    )
}

export default Footer
