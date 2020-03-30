import React from 'react'

const FinalPrice = (props) => {
  const products = props.products
  let finalPrice = 0
  products.map( product => {
    if (product.count > 0) {
      finalPrice += product.count * product.price
    }
  } )

  return (
    <h1>
      ${
        finalPrice
      }
    </h1>
  )
}

export default FinalPrice
