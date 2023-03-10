import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoSearch from "./TodoSearch";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import './UI/Todo.css'

const DUMMY_TASKS = [
  {
    id: "e1",
    task: "O Lorem Ipsum tem vindo a ser",
    isCompleted: false
  },
  {
    id: "e2",
    task: "para criar um espécime de livro.",
    isCompleted: false
  },
  {
    id: "e3",
    task: "É um facto estabelecido de que um leitor é distraído pelo",
    isCompleted: false
  },
  {
    id: "e4",
    task: "Existem muitas variações",
    isCompleted: false
  },
  {
    id: "e5",
    task: "para criar um variações espécime de livro .",
    isCompleted: false
  }
]

const Todo = () => {
  const [todoList, setTodoList] = useState(DUMMY_TASKS);
  const [searchChar, setSearchChar] = useState('');

  const saveTodoSearchHandler = (searchEntry) => {
    setSearchChar(searchEntry);
  };

  const saveTodoEntryHandler = (todoEntry) => {
    setTodoList((prevTodoList) => {
      return [todoEntry, ...prevTodoList];
    });
  };

  return (
    <div className="todo_app">
      <TodoHeader />
      <TodoSearch saveTodoSearch={saveTodoSearchHandler} />
      <TodoList items={todoList} searchReq={searchChar} />
      <TodoAdd saveTodoEntry={saveTodoEntryHandler} />
    </div>
  );
};

export default Todo;
