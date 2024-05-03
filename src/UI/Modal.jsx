import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, className = "", onClose, open }) => {
  const dialog = useRef();

  const cssClass = `modal ${className}`;

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
    //TODO: conflict
    return () => {
      dialog.current.close();
    };
  }, [open]);

  return createPortal(
    <dialog className={cssClass} ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
