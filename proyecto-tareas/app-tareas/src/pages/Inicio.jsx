import React from 'react'
import styles from './inicio.module.css'
import { AppUi } from '../components/AppUi'
import lunUni from "../assets/img-2.webp";
import atardecer from "../assets/atardecer.jpeg";
import { Provaider } from '../components/Context';

function Inicio({ openModal }) {
  return (
    <section className={styles.Bodi}>
      <picture >
          <source media="(min-width: 600px)" srcSet={lunUni} />
          <img className={`${styles['Bodi-img']}`} src={atardecer} alt="fondo" />
      </picture>
      <Provaider>
        <AppUi />
      </Provaider>
    </section>
  )
}

export default Inicio