import { useEffect } from "react";
import "./Modal.css";
import PropTypes from "prop-types";

function Modal({ show, onClose, children }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && event.target.classList.contains("modalOverlay")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <div className="modalContent">
        {children}
        <button className="closeButton" onClick={onClose} type="button">
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
