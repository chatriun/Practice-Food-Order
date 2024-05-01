import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = ({ children, open, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();

      return () => {
        dialog.current.close();
      };
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
