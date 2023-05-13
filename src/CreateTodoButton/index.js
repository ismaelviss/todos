import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {

    const {openModal, setOpenModal} = React.useContext(TodoContext);

    const onClickButton = () => {

        //setOpenModal(!openModal);
        setOpenModal(prevState => !prevState);
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