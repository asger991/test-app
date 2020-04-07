import React from "react"

import Product from "./Product"

const Products = () => {
  return (
    <div className="c-product-comparison__grid">
      <Product
        speed="100"
        subtitle="lorem ipsum bla bla bla"
        text="more bla bla and even more blah blah test text"
        id={1}
      />
      <Product
        speed="100"
        subtitle="lorem ipsum bla bla bla"
        text="more bla bla and even more blah blah test text"
        id={2}
      />
      <Product
        speed="100"
        subtitle="lorem ipsum bla bla bla"
        text="more bla bla and even more blah blah test text"
        id={3}
      />
      <Product
        speed="100"
        subtitle="lorem ipsum bla bla bla"
        text="more bla bla and even more blah blah test text"
        id={4}
      />
    </div>
  )
}

export default Products
