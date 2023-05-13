import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        
        if (!newTodoValue || newTodoValue === '') {
            alert('ingresa un nombre de tu TODO.');
        }
        else {
            // Utilizamos nuestra función para añadir nuestro TODO
            addTodo(newTodoValue);
            // Cerramos nustro modal
            setOpenModal(false);
            // También estaría bien resetear nuestro formulario
            setNewTodoValue('')
        }
    };

    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onWrite} placeholder="cortar la cebolla para el almuero" />

            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };