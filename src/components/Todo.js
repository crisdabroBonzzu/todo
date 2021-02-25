//Todo
// id
// title string
// completed Bool

import React from "react";
function Todo({ todo }) {
  return <div className="todo">{todo.text}</div>;
}
/*
const Todo = ({ todo }) => {
  const { title } = todo;
  const [completed, setCompleted] = useState(todo.completed);

  const handleCompleteClick = () => {
    setCompleted(!completed);
  };

  return (
    <div>
      {console.log(title)}
      <h1>
        {title}
        {completed ? "completed" : "uncompleted"}
      </h1>
      <button onClick={handleCompleteClick}></button>
    </div>
  );
};
*/
export default Todo;
