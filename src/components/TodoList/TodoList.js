import React from "react";
import { connect } from "react-redux";
import { selectors } from "../../reducers/todos";
import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((t, index) => (
        <Todo key={index} todo={t} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: selectors.getTodos(state),
});

export default connect(mapStateToProps)(TodoList);
