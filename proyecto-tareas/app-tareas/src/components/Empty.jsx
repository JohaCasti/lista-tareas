import { useState, useEffect } from "react";
import styles from "./app.module.css"

function Empty({ valid }) {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    if (valid === 0) {
      setMensaje('Ar inte hittade uppgifter!!');
    } else {
      setMensaje('Crea tu primer Tarea!');
    }
  }, [valid]); // Se ejecuta solo cuando `valid` cambie

  return (
    <div>
      <p className={styles.textEmpty}>{mensaje}</p>
    </div>
  );
}

export { Empty };
