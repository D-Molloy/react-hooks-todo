import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Finish to-do hooks app", complete: false },
    { id: 2, text: "Deploy the Porkchop Express", complete: false },
    { id: 3, text: "Finish watching Mannequin", complete: true }
  ]
});
export default TodosContext;
