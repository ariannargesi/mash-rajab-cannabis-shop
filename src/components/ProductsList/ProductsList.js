import React from 'react'
import ListItem from '../ListItem/ListItem'
import PriceCalculator from '../PriceCalculator/PriceCalculator'

import './ProductsList.sass'

const ProductsList = (props) => {
    // helper constant
    const products = props.products
    return(
      <div className="text-center">
      <div className="list-wrapper">
          {
            props.products.length == 0 ? "nothing to show "
            :props.products.map((item, c) => <ListItem product={item} addToCard={props.addToCard} removeFromCard={props.removeFromCard} index={c} key={c}/>)
          }
        </div>
        <div className="bg-shape"></div>
        <div className="price-calculator"><PriceCalculator products={props.products}/></div>
      </div>
    )
}

export default ProductsList
