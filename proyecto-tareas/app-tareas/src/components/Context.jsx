import React from 'react';
import { datos } from '../api/datos'
import { useState, createContext } from 'react'
import { update } from '../api/update';
import { dele } from '../api/delete';

const Context = createContext();
function Provaider({ children }) {
    
    const {item:todos, saveItem:saveTodos, loading, error} = datos();
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo =>  !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter( (todo) => {
        //const todoText = todo.text.toLocaleLowerCase();
        const todoText = todo.text ? todo.text.toLocaleLowerCase() : '';
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });
    
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    };
    
    const completTodo = async (id) => {
            await update(id);
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
            );
            newTodos[todoIndex].completed = true;
            saveTodos(newTodos);
        };

    const deleteTodo = async (id) => {
        await dele(id)
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    
    return (
        <Context.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </Context.Provider> 
    );
}

export { Context, Provaider };