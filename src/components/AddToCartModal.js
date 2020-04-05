import React from "react"
import "react-dates/initialize"
import { DayPickerSingleDateController } from "react-dates"
import moment from "moment"
import "moment/locale/sv"
import "react-dates/lib/css/_datepicker.css"

const AddToCartModal = () => {
  return (
    <div>
      <h2>Välj startdatum</h2>

      <DayPickerSingleDateController
        monthFormat="MMMM YYYY"
        numberOfMonths={1}
      />

      <button type="button" className="btn u-marginTop-s">
        Continue to addons
      </button>
    </div>
  )
}

export default AddToCartModal
