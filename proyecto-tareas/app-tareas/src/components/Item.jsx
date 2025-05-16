import React from 'react'
import styles from "./app.module.css"
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'

function Item(props) {
  
  return (
    <li className={styles.Item} data-id={props.id}>
      <CompleteIcon 
        completed={props.completed} 
        onComplete={props.onComplete}
      />
      <p className={`${styles['Item-p']} ${props.completed ? styles['Item-p--complete'] : ''}`}>
        {props.text}
      </p>
      <DeleteIcon 
        onDelete={props.onDelete} 
      />
    </li>
  )
}

export { Item }