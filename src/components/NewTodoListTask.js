import React, { useState } from 'react';

import './UI/NewTodoListTask.css'

const NewTodoListTask = (props) => {
    const [isChecked,setIsChecked] = useState(props.status);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

    return (
        <div className='task'>
            <input type="checkbox" className='task__check' checked={isChecked} onChange={handleCheckboxChange} />
            <p className='task__content'>{props.content}</p>
        </div>
    )
}

export default NewTodoListTask;