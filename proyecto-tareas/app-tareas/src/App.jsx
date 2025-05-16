import { useState, useEffect } from 'react'
import './App.css'
import fondoDestokp from "./assets/img-fondo.webp";
import fondoMovil from "./assets/movil1.jpg";
import { Inicio, Modal } from "./pages";

function App() {
  const [valid, setValid] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const password = "koala"
  const onSubmit = (e) => {
    e.preventDefault();

    if (password === valid.toLowerCase()) {
      console.log("es correcto");
      setOpenModal(true);
    } else {
      console.log("intentalo de nuevo");
    }
  }
  const onChange = (e) => {
    setValid(e.target.value)
  }
  return (
    <>
      <main className='Hero'>
        <div className='Hero-conta'>
          <picture >
            <source media="(min-width: 600px)" srcSet={fondoDestokp} />
            <img className='Hero-img' src={fondoMovil} alt="fondo" />
          </picture>
          <div className='Hero-cont'>
            <div className='title'>
              <h1 className='titulo'>Logga in på dina uppgifter!!</h1>
              <p className='text'>Kom ihåg att ha en bra dag och gör dina läxor</p>
              <form onSubmit={onSubmit} className='formu' >
                <label>Skriv in du användare</label>
                <input type="text" className='Hero-user' placeholder='Usuario!!'
                  value={valid}
                  onChange={onChange}
                  required
                />
                <div className='containerbuton'>
                    <button type='submit'
                    className='Todofrom-buton Todofrom-buton-add'>
                      Ingresar
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      {openModal && (
      <Modal>
        <Inicio openModal={openModal}/>
      </Modal>
      )}
    </>
  )
}

export default App
