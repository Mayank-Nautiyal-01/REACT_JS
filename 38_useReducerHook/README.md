# useReducer Hook in React

## Introduction
`useReducer` is a React Hook that is useful for managing complex state logic in functional components. It is an alternative to `useState` when state transitions depend on the previous state.

## How `useReducer` Works
The `useReducer` hook takes in two arguments:
1. **Reducer function** - A function that determines state changes based on the dispatched action.
2. **Initial state** - The starting state of the component.

It returns an array containing:
- **Current state**
- **Dispatch function** - Used to trigger state changes.

## Code Example: Counter using `useReducer`

### File: `Index.js`
```jsx
import { useReducer } from "react";

function Index() {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
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
```

### File: `App.js`
```jsx
import Index from "./useReducer/Index";

function App() {
  return (
    <div>
      <Index/>
    </div>
  );
}

export default App;
```

## Explanation
1. **Defining the Initial State**:
   ```jsx
   const initialState = { count: 0 };
   ```
   The state object starts with a `count` property set to 0.

2. **Creating the Reducer Function**:
   ```jsx
   const reducer = (state, action) => {
     switch(action.type){
       case "INCREMENT":
           return { count: state.count + 1 };
       case "DECREMENT":
           return { count: state.count - 1 };
       case "RESET":
           return { count: 0 };
       default:
           return state;
     }
   };
   ```
   The reducer function takes the current state and an action, then returns a new state based on the action type.

3. **Using `useReducer` Hook**:
   ```jsx
   const [state, dispatch] = useReducer(reducer, initialState);
   ```
   - `state`: Holds the current state.
   - `dispatch`: Triggers actions to update the state.

4. **Handling Button Clicks**:
   ```jsx
   <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
   <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
   <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
   ```
   - Clicking a button dispatches an action (`INCREMENT`, `DECREMENT`, or `RESET`).
   - The reducer updates the state accordingly.

## Why Use `useReducer`?
- **Manages complex state logic** more effectively than `useState`.
- **Predictable state transitions** using pure functions.
- **Useful for state-dependent updates**.

## Output
When running this code, you will see a counter with three buttons:
- **Increment** → Increases the count.
- **Decrement** → Decreases the count.
- **Reset** → Resets the count to zero.

## Conclusion
The `useReducer` hook is useful for managing state transitions efficiently. This example demonstrates how it can be implemented in a simple counter application.

