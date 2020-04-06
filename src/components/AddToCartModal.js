import React from "react"
import "react-dates/initialize"
import { DayPickerSingleDateController } from "react-dates"
// import moment from "moment"
import "moment/locale/sv"
import "react-dates/lib/css/_datepicker.css"
import "../../src/components/layout.css"

const AddToCartModal = () => {
  return (
    <div className="flex">
      <h3 style={{ textAlign: `center` }}>Välj startdatum</h3>

      <DayPickerSingleDateController
        monthFormat="MMMM YYYY"
        numberOfMonths={1}
        noBorder="true"
        openUp="true"
        enableOutsideDays="true"
      />

      <button type="button" className="btn u-marginTop-s">
        Continue to addons
      </button>
    </div>
  )
}

export default AddToCartModal
