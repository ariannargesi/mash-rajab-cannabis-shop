import React from 'react'

const AddProduct = (props) => {

  function handleAddProduct(e){
      e.preventDefault()
      const [name, price, description, image] =  e.target.elements
      props.handler({name: name.value, price: price.value, imgUrl: image.value,description: description.value})
    }

  return (
        <div>
          <form onSubmit={handleAddProduct}>
            <label htmlFor="name"> Enter Product Name </label>
            <input type="text" id="name"  required/>
            <br/>
            <label htmlFor="number">Enter Product Price </label>
            <input type="number" id="number" required/><br/>
            <label htmlFor="description"> Some details about this product</label>
            <input type="text" id="description" placeholder="enter the des"/><br/>
            <label htmlFor="image">Please enter img url</label>
            <input type="text" id="image" placeholder="enter img " required />
            <br/>
            <input type="submit"/>
          </form>
        </div>
      )
}
export default AddProduct
