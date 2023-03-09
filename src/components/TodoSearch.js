import './UI/TodoSearchAdd.css'

const TodoSearch = () =>{
    return (
        <div className="todo_search_add">
            <input type="text" className='todo_search_add__input'/>
            <button className='todo_search_add__button'>Search</button>
        </div>
    )
}

export default TodoSearch;