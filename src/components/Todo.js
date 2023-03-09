import React,{useState} from "react";
import TodoHeader from "./TodoHeader";
import TodoSearch from "./TodoSearch";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import './UI/Todo.css'

const DUMMY_TASKS = [
  {
    id: "e1",
    task: "Iskept kebabu"
  },
  {
    id: "e2",
    task: "Nueiti i sokius"
  },
  {
    id: "e3",
    task: "Suprogramuoti geriausia puslapi"
  },
]

const Todo = () => {
  const [todoList, setTodoList] = useState(DUMMY_TASKS);

  const saveTodoEntryHandler = (entry) => {
    setTodoList((prevTodoList) => {
      return [entry, ...prevTodoList];
    });
  };

  return (
    <div className="todo_app">
      <TodoHeader />
      <TodoSearch />
      <TodoList items={todoList} />
      <TodoAdd saveTodoEntry={saveTodoEntryHandler} />
    </div>
  );
};

export default Todo;
