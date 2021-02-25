import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      {todoList.forEach((t, index) => {
        <Todo key={index} todo={t} />;
      })}
    </div>
  );
};

export default TodoList;
