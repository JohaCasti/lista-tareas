import styles from "./app.module.css";
import { Counter } from './Counter'
import { Search } from './Search'
import { List } from './List'
import { Item } from './Item'
import { useContext } from 'react'
import { Create } from './Create'
import { FormTarea } from './FormTarea'
import { Loading } from './Loading'
import { Error } from './Error'
import { Empty } from './Empty'
import { Modal } from './Modal'

import { Context } from './Context'


function AppUi() {
  const {
    loading,
    error,
    searchedTodos,
    completTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(Context);
  return (
    <main className={styles.Main}>
        <Counter />
        <Search />
        <Context.Consumer>
          {() => (
            <List>
              {loading && <Loading />}
              {error && <Error />}
              {(!loading && searchedTodos.length === 0 && !error) && <Empty valid={searchedTodos.length}/>}
              {searchedTodos.map(tarea => (
                <Item 
                  key={tarea.id} 
                  id={tarea.id} 
                  text={tarea.text} 
                  completed={tarea.completed}
                  onComplete={() => completTodo(tarea.id)}
                  onDelete={() => deleteTodo(tarea.id)}
                /> ))}
            </List>
          )}
        </Context.Consumer>
        <Create setOpenModal={setOpenModal}/>
        {openModal && (
          <Modal>
            <FormTarea>
            </FormTarea>
          </Modal>
        )}
    </main>
  )
}

export { AppUi }