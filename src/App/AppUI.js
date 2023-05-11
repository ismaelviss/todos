import React, { Fragment }  from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI ({
    loading, error, totalTodos, completedTodos,searchValue,setSearchValue,searchTodos,completeTodo,deleteTodo
}) {
    return(
        <Fragment>
            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}  
                {(!loading && !searchTodos.length) && <p>¡Crea tu primer TODO!</p>}
                {
                    searchTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>))
                }
            </TodoList>
            <CreateTodoButton />
        </Fragment>
    );
}

export {AppUI};