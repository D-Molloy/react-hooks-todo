import React, { useContext } from "react";
import TodosContext from "../context";
import Axios from "axios";
// import todosReducer from "../reducer";

export default function TodoList() {
  const {
    state: { todos },
    dispatch
  } = useContext(TodosContext);

  const title =
    todos.length > 0 ? `${todos.length} Todos:` : "Nothing to do...";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-xl">{title}</h1>
      <ul className="list-reset text-white p-0">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="bg-orange-600 border-black border-dashed border-2 my-2 py-4 flex items-center"
          >
            <span
              onDoubleClick={async () => {
                const response = await Axios.patch(
                  `https://hooks-api.denismolloy.now.sh/todos/${todo.id}`,
                  { complete: !todo.complete }
                );
                dispatch({ type: "TOGGLE_TODO", payload: response.data });
              }}
              className={`flex-1 ml-12 cursor-pointer ${todo.complete &&
                "line-through text-gray-600"}`}
            >
              {todo.text}
            </span>
            <button
              className="mx-3"
              onClick={() =>
                dispatch({ type: "SET_CURRENT_TODO", payload: todo })
              }
            >
              <img
                src="https://icon.now.sh/edit/0050c5"
                alt="edit icon"
                className="h5"
              />
            </button>
            <button
              className="mx-3"
              onClick={async () => {
                await Axios.delete(
                  `https://hooks-api.denismolloy.now.sh/todos/${todo.id}`
                );
                dispatch({ type: "REMOVE_TODO", payload: todo });
              }}
            >
              <img
                src="https://icon.now.sh/delete/8b0000"
                alt="delete icon"
                className="h5"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
