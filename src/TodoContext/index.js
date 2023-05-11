import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const [todos, saveTodos, loading, error] = useLocalStorage('TODOS_V1', []);
  
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    
    let searchTodos = [];

    if (searchValue.length === 0) {
        searchTodos = todos;
    } else {
        searchTodos = todos.filter(todos => todos.text.toLowerCase().includes(searchValue.toLowerCase()));
    }

    const completeTodo = (text) => {
    
    const todoIndex = todos.findIndex(todo => todo.text === text);
    let completeTodos = [...todos];
    completeTodos[todoIndex].completed = !completeTodos[todoIndex].completed;

    saveTodos(completeTodos);
  };

  const deleteTodo = (text) => {
    
    const todoIndex = todos.findIndex(todo => todo.text === text);
    let newTodos = [...todos];
    
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

    return (
        <TodoContext.Provider value={{
            loading,error,totalTodos,completedTodos,searchValue,setSearchValue,searchTodos,completeTodo,deleteTodo

        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };