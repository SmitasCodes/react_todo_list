import React, { useRef } from "react";
import "./UI/TodoSearchAdd.css";

const TodoAdd = (props) => {
  const inputRef = useRef(null);

  const addBtnHandler = () => {
    if (!inputRef.current.value.trim()) {
      console.log("Task is not entered")
      return;
    }

    const todoData = {
      task: inputRef.current.value,
      id: Math.random().toString(),
      isCompleted: false
    }

    props.saveTodoEntry(todoData);
    inputRef.current.value = "";
  };

  return (
    <div className="todo_search_add">
      <input id="input" type="text" ref={inputRef} className="todo_search_add__input" />
      <button onClick={addBtnHandler} className="todo_search_add__button">
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
