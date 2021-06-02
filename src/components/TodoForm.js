import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      return alert("Please enter something");
    }
    const todo = {
      title: inputValue,
      id: uuidv4(),
    };
    addTodos(todo);

    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="form-control"
          placeholder="Add todo..."
        />
        <button type="submit" className="btn btn-info text-light btn-lg">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
