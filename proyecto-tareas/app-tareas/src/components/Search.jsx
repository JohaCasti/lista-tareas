import React from 'react'
import styles from "./app.module.css"
import { Context } from "./Context"
import { useContext } from 'react'

function Search() {
  const {
    searchValue,
    setSearchValue,
  } = useContext(Context)
  return (
    <input className={styles.Search} placeholder="Besar a tu arbolito!" value={searchValue}
        onChange={
          (event) => {
            setSearchValue(event.target.value);
          }
        }
    />
  )
}

export { Search }