import React, { useState } from "react";
import Modal from "react-modal";

export default ({ component, componentClass, label, children, className }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen} className={className}>
        {children}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className={componentClass}
        contentLabel={label}
      >
        {component}
      </Modal>
    </>
  );
};
