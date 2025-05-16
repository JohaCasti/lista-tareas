import { useEffect, useRef } from 'react';
import Sortable from 'sortablejs'; // <- Importación de la librería
import styles from './app.module.css';
import { orden } from '../api/orden'; 

function List(props) {
  const listRef = useRef(null); // 1. Referencia al ul

  useEffect(() => {
    if (listRef.current) {
      Sortable.create(listRef.current, {
        animation: 150,
        chosenClass: "seleccionado",
        ghostClass: "ghost",
        dragClass: "drag",
        onEnd: (evt) => {
          console.log('Elemento movido:', evt.oldIndex, '->', evt.newIndex);
        },
        group: "lista-tareas",
        store: {
            // guardar el orden de la lista
            set: (sortable) => {
              const ordenLista = sortable.toArray();  // Obtienes el nuevo orden
              // Llamas a la función orden pasándole el nuevo orden
              orden(ordenLista);   
            },
        }
      });
    }
  }, []); // [] para que se ejecute solo una vez

  return (
    <ul className={styles.List} ref={listRef}>
      {props.children}
    </ul>
  );
}

export { List };