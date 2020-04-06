import React, { useState } from "react"
import Modal from "react-modal"

export default ({ component, label, children, className }) => {
  const customStyles = {
    content: {
      top: "5%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "10%",
      transform: "translate(-40%, -10%)",
      zIndex: "100000",
      // border: "none",
      display: "flex",
      justifyContent: "center",
    },
  }
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <button onClick={handleOpen} className={className}>
        {children}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel={label}
      >
        {component}
      </Modal>
    </>
  )
}
