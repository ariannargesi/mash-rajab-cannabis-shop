import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import ProductsList from './components/ProductsList/ProductsList'
import AddProduct from './components/AddProduct/AddProduct'

import './App.sass'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      // count refer to number of product in user card
      products: [
        { name: "Tea and nabat", price: 1, count:0, description: "good for coronavirus, all kind of HIV(a to z) and many other benefits" , imgUrl:"https://images.unsplash.com/photo-1575650771982-097ad8b4a716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
        { name: "Monster Rehab ", price: 3, count:0, description: " calcium pantothenate, yellow 5, yellow 6, pyridoxine hydrochloride " , imgUrl:"https://images.unsplash.com/photo-1551870573-6f5e93e660fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
        { name: "Venom Energy", price: 1, count:0, description: "Carbonated water, high fructose corn syrup, white grape juice concentrate, concentrated orange juice," , imgUrl:"https://images.unsplash.com/photo-1560689189-65b6ed6228e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" },
        { name: "Monster Muscle", price: 3, count:0, description: "PRODUCT DESCRIPTION: Red Bull is appreciated worldwide by top athletes " , imgUrl:"https://images.unsplash.com/photo-1578619918896-128ac25d1a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
        { name: "Red Bull Energy", price: 5, count:0, description: "THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE " , imgUrl:"https://images.unsplash.com/photo-1546527050-7e08a7f44112?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" },
        { name: "Monster Juice - Energy", price: 2, count:0, description: "Carbonated water, sugar, apple juice concentrate, glucose, orange juice concentrate" , imgUrl:"https://images.unsplash.com/photo-1566368302638-78f7bc439ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" },
        { name: "Ol Glory Energy", price: 3, count:0, description: "PRODUCT DESCRIPTION: Our Pro Athletes are always looking for an edge" , imgUrl:"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=407&q=80" },
        { name: "NOS High Performance", price: 1, count:0, description: "Not recommended for individuals under 18 years of age, pregnant or nursing women" , imgUrl:"https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" }
      ]
    }
    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.handleAddToCard = this.handleAddToCard.bind(this)
    this.handleRemoveFromCard = this.handleRemoveFromCard.bind(this)
  }

  // passed as prop to AddProduct component
  handleAddProduct( {name, price, imgUrl, description} ){
    // get current state and add new product to it
    const currentProducts = this.state.products
    currentProducts.push({ name, price, count: 0,imgUrl, description})

    //updating state
    this.setState({
      products: currentProducts
    })
  }

  // 1-take product index as argument
  // 2-find the exact match with that
  // 3-+1 the count property
  handleAddToCard(index){
    //get current state
    const currentState = this.state.products


    const newState = currentState.map((item,i) => {
      if(index === i )
        item.count++
      return item
    })

    // updating state
    this.setState({
      products: newState
    })
  }

  handleRemoveFromCard(index){
    // get the current state
    const currentState = this.state.products

    // 1-take product index as argument
    // 2-find the exact match with that
    // 3- -1 the count property
    const newState = currentState.map((item,i) => {
      if(index === i )
        item.count--
      return item
    })

    // updating state
    this.setState({
      products: newState
    })
  }

  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={ () => <ProductsList addToCard={this.handleAddToCard} removeFromCard={this.handleRemoveFromCard} products={this.state.products} />}/>
            <Route path="/add-product" component={ () => <AddProduct handler={this.handleAddProduct} /> }/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App
