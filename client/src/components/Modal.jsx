import { useRef } from "react";
import "./Modal.css";
import PropTypes from "prop-types";

function Modal({ show, onClose, children }) {
  const modalRef = useRef(null);

  const handleBlur = (event) => {
    if (!modalRef.current.contains(event.relatedTarget)) {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onBlur={handleBlur}
      ref={modalRef}
    >
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onClose} type="button">
          X
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
