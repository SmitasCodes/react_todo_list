import './UI/NewTodoListTask.css'

const NewTodoListTask = (props) =>{
    return (
        <div className='task'>
            <input type="checkbox" className='task__check'/>
            <p className='task__content'>{props.content}</p>
        </div>
    )
}

export default NewTodoListTask;