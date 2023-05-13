import React, { Fragment }  from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { Skeleton } from "../Skeleton";

function AppUI () {

    const {
        error, 
        loading, 
        searchTodos, 
        completeTodo, 
        deleteTodo,
        openModal
    } = React.useContext(TodoContext);

    return(
        <Fragment>
            <TodoCounter/>
            <TodoSearch/>
        
                <TodoList>
                    {error && <p>Desespérate, hubo un error...</p>}
                    {loading && <Skeleton />}  
                    {(!loading && !searchTodos.length) && <p>¡Crea tu primer TODO!</p>}
                    {
                        searchTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>))
                    }
                </TodoList>
                
                {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
                
        
            <CreateTodoButton />
        </Fragment>
    );
}

export {AppUI};