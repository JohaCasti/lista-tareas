import styles from "./app.module.css";
import  koalita  from '../assets/koalita.png';
import { Context } from "./Context";
import { useState, useContext } from 'react';

function FormTarea() {
  const { setOpenModal, addTodo } = useContext(Context);  // Asegúrate de tener addTodo en el Context
  const [newValu, setNewValu] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Hacer la petición POST a la API de Flask para agregar la tarea
    try {
      const response = await fetch('https://johancasti92.pythonanywhere.com/in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tarea: newValu,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        addTodo(newValu); // Si addTodo está diseñado para manejar la tarea añadida
        setOpenModal(false); 
      } else {
        console.error('Error al añadir tarea:', response.statusText);
      }
    } catch (error) {
      console.error('Hubo un problema con la petición:', error);
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewValu(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Escribe tu nueva TAREA</label>
        <textarea
          placeholder="Escribe la tarea nueva!"
          value={newValu}
          onChange={onChange}
          required
        />
        <div className={styles.containerbuton}>
          <button
            type="button" 
            className={`${styles['Todofrom-buton']} ${styles['Todofrom-buton-cancel']}`}
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className={`${styles['Todofrom-buton']} ${styles['Todofrom-buton-add']}`}
          >
            Añadir
          </button>
        </div>
      </form>
      <img className={styles.koalita} src={koalita} alt="koalita" />
    </>
  );
}

export { FormTarea };