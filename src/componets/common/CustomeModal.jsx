import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomeModal = ({
  children,
  title,
  size,
  handleClose,
  handleShow,
  backdrop,
  keyboard,
  fullscreen,
  dialogClassName,
  centered,
}) => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={handleShow}
        onHide={handleClose}
        backdrop={backdrop || "static"}
        keyboard={keyboard || true}
        size={size || "md"}
        fullscreen={fullscreen || false}
        dialogClassName={dialogClassName || ""}
        centered={centered || false}
      >
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {title && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default CustomeModal;
