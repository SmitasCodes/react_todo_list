import React from 'react';
import './UI/TodoSearchAdd.css'

const TodoSearch = (props) =>{
    const searchEntryHandler = (e) =>{
       props.saveTodoSearch(e.target.value);
    }

    return (
        <div className="todo_search_add">
            <input type="text" className='todo_search_add__input' onChange={searchEntryHandler}/>
            <button className='todo_search_add__button'>Search</button>
        </div>
    )
}

export default TodoSearch;