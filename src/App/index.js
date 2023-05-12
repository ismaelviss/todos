import React, { Fragment } from 'react';
import logo from '../logo.svg';
import {AppUI} from './AppUI.js'
import { TodoProvider } from '../TodoContext';
// import './App.css';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];




function App() {

  console.log('antes use effect');
  React.useEffect(() => {
    console.log('use effect');
  }, []);
  console.log('despues use effect');

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
