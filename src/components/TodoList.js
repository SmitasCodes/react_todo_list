import React from "react";
import NewTodoListTask from "./NewTodoListTask";
import "./UI/TodoList.css";

const TodoList = (props) => {
  const searchResults = props.items.filter(item =>
    item.task.toLowerCase().startsWith(props.searchReq.toLowerCase())
  )

  return (
    <div className="todo_list">
      {searchResults.map((item) => {
        return <NewTodoListTask key={item.id} content={item.task} status={item.isCompleted} />;
      })}
    </div>
  );

};

export default TodoList;
