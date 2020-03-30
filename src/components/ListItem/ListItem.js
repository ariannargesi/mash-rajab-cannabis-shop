import React from 'react'
import './ListItem.sass'

const ListItem = (props) => {
  // helper constant
  const product = props.product
  function addToCard(){
    props.addToCard(props.index)
  }
  function removeFromCard(){
    props.removeFromCard(props.index)
  }
  return (
    <div className="single-product" key={props.c}>
    <div className="image-wrapper">
      <img src={product.imgUrl} />
    </div>
    <div className="detail-wrapper">
      <h1>{product.name}</h1>
      <b className="priceTitle">${props.product.price}</b>
      <p>{product.description}</p>
      <div className="buttons-wrapper">
        <button className="bg-light-green" onClick={addToCard}><i className="fa fa-plus" ></i></button>
        <button className= { product.count != 0 ? "bg-light-red" : "bg-light-gray"}  onClick={ product.count != 0 ? removeFromCard : () => console.log('action blocked') }><i className="fa fa-remove"></i></button>
      </div>
    </div>
    </div>
  )
}

export default ListItem
