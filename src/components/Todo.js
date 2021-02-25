//Todo
// id
// title string
// completed Bool

import React, { useState } from "react";
import "./Todo.css";

const Todo = (props) => {
  const { todo } = props;
  const { title } = todo;
  const [completed, setCompleted] = useState(todo.completed);

  const handleCompleteClick = () => {
    setCompleted(!completed);
  };

  return (
    <div className="todo">
      <button
        className={completed ? "completed" : "uncompleted"}
        onClick={handleCompleteClick}
      >
        <h1>{title}</h1>
      </button>
    </div>
  );
};

export default Todo;
