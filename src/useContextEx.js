import React, { useContext, useReducer } from "react";
import { UserContext } from "./index";

//useContext way to consume context
export default function App() {
  const value = useContext(UserContext);

  return <h1>Hello, {value}</h1>;
}
/**
 * Prehooks way to consume context
 */
// export default function App() {
//   return (
//     <UserContext.Consumer>
//       {/* the value passed down */}
//       {value => (
//         <div>
//           <h1> Hello, {value}</h1>
//         </div>
//       )}
//     </UserContext.Consumer>
//   );
// }
