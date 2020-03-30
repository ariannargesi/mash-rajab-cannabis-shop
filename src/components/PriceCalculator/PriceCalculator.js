import React from 'react'
import FinalPrice from '../FinalPrice/FinalPrice'

import './PriceCalculator.sass'

const PriceCalculator = (props) => {
  return(
    <div className="price">
      <h1>Your card</h1>
      <hr/>
      {
      props.products
      .filter(item => item.count > 0)
      .map(item => {
          return(
            <div style={{color: "",fontSize:"32px",border:"1px solid #eee"}}>
              <img style={{height:"40px",width:"40px",float:"left",border:"1px solid white"}} src={item.imgUrl}/>
              <p style={{fontSize:"18"}}>You have { item.count} pack of <b>{item.name} </b> = ${item.count * item.price}</p>
            </div>
          )
        })
      }
      <FinalPrice products = {props.products} />
    </div>
  )
}

export default PriceCalculator
