import React from "react"

import Product from "./Product"

const Products = () => {
  return (
    <div className="c-product-comparison__grid">
      <Product
        speed="100"
        subtitle="lorem ipsum bla bla bla"
        text="more bla bla and even more blah blah test text"
      />
      <Product
        speed="100"
        subtitle="lorem ipsum bla bla bla"
        text="more bla bla and even more blah blah test text"
      />
      <Product
        speed="100"
        subtitle="lorem ipsum bla bla bla"
        text="more bla bla and even more blah blah test text"
      />
      <Product
        speed="100"
        subtitle="lorem ipsum bla bla bla"
        text="more bla bla and even more blah blah test text"
      />
    </div>
  )
}

export default Products
