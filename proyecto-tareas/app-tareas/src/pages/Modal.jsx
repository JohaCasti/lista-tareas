import React from 'react'
import { createPortal } from 'react-dom';

function Modal({children}) {
  return createPortal(
      <div className="inicio">
          {children}
      </div>,
      document.getElementById('inicio')
  );
}

export default Modal