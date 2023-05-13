import React from "react";
import './TodoItem.css'
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

function TodoItem(props) {

    const {text, completed, onComplete, onDelete} = props;

    const onCompleteItem = () => {
        console.log('tarjeta completada ' + text);
    };

    const onDeleteItem = () => {
        console.log('tarjeta eliminada ' + text);
    };

    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}><BsFillBookmarkCheckFill /></span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <span className="Icon Icon-delete" onClick={onDelete}>X</span>
        </li>
    );
}

export { TodoItem };