import React from 'react'
import styles from "./app.module.css"
import { createPortal } from 'react-dom';

function Modal({children}) {
  return createPortal(
    <div className={styles.Modal}>
            {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }