import React from 'react'
import styles from "./app.module.css"

function Create({ setOpenModal }) {
  return (
    <button className={styles.Create} 
      onClick={
        () => {
            setOpenModal(state => !state);
        } 
      }
    >+</button>
  )
}

export { Create }