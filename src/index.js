import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// UserContext is an object with 2 methods:
// 1 - Provider
// 2 - Consumer
export const UserContext = React.createContext();

const username = "Denis";

ReactDOM.render(
  <UserContext.Provider value={username}>
    <App username={username} />
  </UserContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
