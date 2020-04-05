import React from "react"
import Modal from "./Modal"
import AddToCartModal from "./AddToCartModal"

const Products = ({ speed, subtitle, text }) => {
  return (
    <div className="c-product-comparison__product">
      <h2 className="c-product-comparison__title">
        <span className="c-product-comparison__fiber">Fiber</span>
        <span className="c-product-comparison__speed">{speed}</span>
        <span className="c-product-comparison__mbit">Mbit/s</span>
      </h2>
      <p className="c-product-comparison__subtitle">{subtitle}</p>
      <p className="u-color-grey u-text-medium">{text}</p>
      <Modal component={<AddToCartModal />} componentClass="" className="btn">
        {`Select ${speed}`}
      </Modal>
    </div>
  )
}

export default Products
