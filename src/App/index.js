import React, { Fragment } from 'react';
import logo from '../logo.svg';
import {AppUI} from './AppUI.js'
// import './App.css';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
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

    setTodos(completeTodos);
  };

  const deleteTodo = (text) => {
    
    const todoIndex = todos.findIndex(todo => todo.text === text);
    let newTodos = [...todos];
    
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  return (
    <AppUI totalTodos={totalTodos} completedTodos={completedTodos} searchValue={searchValue} setSearchValue={setSearchValue} searchTodos={searchTodos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
  );
}

export default App;
