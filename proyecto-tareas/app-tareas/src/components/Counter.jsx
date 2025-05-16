import React from 'react'
import styles from "./app.module.css"
import { Context } from "./Context"
import { useContext } from 'react'

function Counter() {
  const {
    completedTodos,
    totalTodos,
  } = useContext(Context)
  return (
    <h1 className={styles.Counter}>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> UPPGIFTER.
    </h1>
  )
}

export { Counter }