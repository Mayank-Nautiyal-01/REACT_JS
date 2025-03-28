import { useReducer } from "react";

function Index() {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    // if (action.type === "INCREMENT") {
    //   return { count: state.count + 1 };
    // }
    // if (action.type === "DECREMENT") {
    //   return { count: state.count - 1 };
    // }
    // if (action.type === "RESET") {
    //   return { count: 0 };
    // }
    // return state; // Return current state if action is unknown

    //====using switch 
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1};
            
        case "DECREMENT":
            return {count:state.count-1};
        case "RESET":
            return {count:0};
        default:
            return state;  // Return current state if action is unknown
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Index;
