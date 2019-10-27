import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import TodosContext from "./context";
import todosReducer from "./reducer";
import TodoList from "./components/TodoList";

import * as serviceWorker from "./serviceWorker";

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodosContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
// ---------------------------------------------------------------
//for userReducer and useContext

// // UserContext is an object with 2 methods:
// // 1 - Provider
// // 2 - Consumer
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./useReducerEx";
// //import App from "./useContextEx";
// export const UserContext = React.createContext();
// const username = "Denis";
// ReactDOM.render(
//   <UserContext.Provider value={username}>
//     <App username={username} />
//   </UserContext.Provider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
