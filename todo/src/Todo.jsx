import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const submitTodo = () => {
    const trimmedInput = input.trim();

    // Prevent empty todos
    if (!trimmedInput) return;

    setTodos((prevTodos) => [...prevTodos, trimmedInput]);
    setInput("");
  };

  const removeTodo = (indexToRemove) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove)
    );

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitTodo();
    }
  };

  return (
    <div className="container">
      <h1 className="todo">Todo Count : {todos.length}</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={submitTodo}>
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="todo">No todos yet.</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo">
              <span>{todo}</span>
              <button
                className="close"
                onClick={() => removeTodo(index)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;