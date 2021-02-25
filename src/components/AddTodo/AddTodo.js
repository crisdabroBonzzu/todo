import React, { useState } from "react";
import { connect } from "react-redux";
import { actions } from "../../reducers/todos";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim()) {
      dispatch(actions.addTodo(input));
      setInput("");
    }
  };

  return (
    <div>
      <input
        placeholder="Insert Todo"
        value={input}
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value.trim()) {
            setInput(e.target.value);
          }
        }}
      />
      <div>
        <button onClick={() => handleClick()}>Add Todo</button>
      </div>
    </div>
  );
};

export default connect()(AddTodo);
