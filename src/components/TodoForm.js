import React, { useState, useContext } from "react";
import TodosContext from "../context";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodosContext);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <label htmlFor="todo-input">Add a todo:</label>
      <input
        type="text"
        id="todo-input"
        className="border-black border-solid border-2"
        onChange={e => setTodo(e.target.value)}
        value={todo}
      />
    </form>
  );
}
