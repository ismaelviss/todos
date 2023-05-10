import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton= () => {
        alert('popup');
    };

    return(
        <button 
        className="CreateTodoButton"
        //onClick={() => console.log('click')}
        onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };