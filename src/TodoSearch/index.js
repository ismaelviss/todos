import React, { Fragment } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const {
        searchValue, 
        setSearchValue
    } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <Fragment>
            <input className="TodoSearch" placeholder="cebolla" value={searchValue} onChange={onSearchValueChange}></input>
            <p>{searchValue}</p>
        </Fragment>
    );
}

export { TodoSearch };