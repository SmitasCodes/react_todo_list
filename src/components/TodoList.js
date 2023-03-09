import React from "react";
import NewTodoListTask from "./NewTodoListTask";
import "./UI/TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todo_list">
      {props.items.map((item) => {
        return <NewTodoListTask key={item.id} content={item.task} />;
      })}
    </div>
  );
};

export default TodoList;
