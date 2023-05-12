import React, { Fragment }  from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";

function AppUI ({
    loading, error, totalTodos, completedTodos,searchValue,setSearchValue,searchTodos,completeTodo,deleteTodo
}) {
    return(
        <Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
                {({error, loading, searchTodos, completeTodo, deleteTodo}) => {
                    return (
                        <TodoList>
                            {error && <p>Desespérate, hubo un error...</p>}
                            {loading && <p>Estamos cargando, no desesperes...</p>}  
                            {(!loading && !searchTodos.length) && <p>¡Crea tu primer TODO!</p>}
                            {
                                searchTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>))
                            }
                        </TodoList>
                    ); 
                }}
            </TodoContext.Consumer>

            <CreateTodoButton />
        </Fragment>
    );
}

export {AppUI};