import React from 'react'
import styles from "./app.module.css"
import KoalaWarning from '../assets/koallo.gif';
function Error() {
  return (
    <div className={styles.conteError}>
      <p className={styles.textError}>Warning...  Hubo un problema!!!</p>
      <img className={styles.imGif} src={KoalaWarning} alt="warning" />
    </div>
    
  )
}

export { Error }