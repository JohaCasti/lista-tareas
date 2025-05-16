import React from 'react'
import styles from "./app.module.css"
import  cute  from '../assets/cute.gif';

function Loading() {
  return (
    <div className={styles.Container}>
      <p className={styles['title-loading']}>Cargando tareas...</p>
      <div className={styles['loading-wave-container']}>
            <div className={styles['loading-wave']}>
                <div className={styles['loading-bar']}></div>
                <div className={styles['loading-bar']}></div>
                <div className={styles['loading-bar']}></div>
                <div className={styles['loading-bar']}></div>
            </div>
        </div>
        <img className={styles['loading-img']} src={cute} alt="koa" />
    </div>
  )
}

export { Loading }