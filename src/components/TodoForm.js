import React, { useState, useContext, useEffect } from "react";
import TodosContext from "../context";

export default function TodoForm() {
  const [todo, setTodo] = useState("");

  // destrucutre currentTodo off of state and give it a default value of {}
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    } else {
      setTodo("");
    }
    // update if the todo id changes
  }, [currentTodo.id]);

  const handleSubmit = e => {
    e.preventDefault();
    // if currentTodo is set, update the todo, otherwise add a new one
    if (currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
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
