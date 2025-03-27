# Custom Hooks in React

## Introduction

React Custom Hooks allow you to extract and reuse logic across multiple components, making your code more modular and readable. They follow the naming convention of starting with `use` (e.g., `useFetch`, `useCounter`).

## Why Use Custom Hooks?

1. **Code Reusability** - Extract common logic into a reusable function.
2. **Separation of Concerns** - Keeps components cleaner and focused on UI.
3. **Simplifies Code** - Avoids unnecessary duplication.
4. **Enhances Readability** - Makes complex logic easier to manage.

## Steps to Create a Custom Hook

1. **Create a new JavaScript file (e.g., `useCounter.js`)**.
2. **Define a function that starts with `use` (e.g., `useCounter`)**.
3. **Use React hooks inside it (e.g., `useState`, `useEffect`)**.
4. **Return values or functions needed by components**.
5. **Import and use the custom hook in your components**.

---

## Example: Creating a Custom Counter Hook (`useCounter`)

### 1. Creating the Custom Hook (`useCounter.js`)

```javascript
import { useState } from "react";

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}

export default useCounter;
```

#### Explanation:
- We define `useCounter`, a function that starts with `use`.
- `useState` is used to manage the `count` state.
- The `increment`, `decrement`, and `reset` functions modify the state.
- The hook returns an object containing the `count` state and the functions.

### 2. Using the Custom Hook in a Component (`Counter.js`)

```javascript
import React from "react";
import useCounter from "./useCounter";

function Counter() {
    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
```

#### Explanation:
- `useCounter(10)` initializes the counter with `10`.
- `count` holds the current value of the counter.
- The three functions (`increment`, `decrement`, `reset`) allow modifying the counter.
- The component renders the counter value and buttons to update it.

### 3. Using `Counter` in `App.js`

```javascript
import React from "react";
import Counter from "./Counter";

function App() {
    return (
        <div>
            <h2>Custom Hook Example</h2>
            <Counter />
        </div>
    );
}

export default App;
```

#### Explanation:
- `Counter` is imported and used inside `App`.
- The application displays the `Counter` component, allowing the user to interact with it.

## Key Takeaways

- Custom hooks start with `use` (e.g., `useCounter`).
- They encapsulate reusable logic, reducing redundancy.
- They improve code organization and maintainability.
- They can use other React hooks like `useState`, `useEffect`, etc.

## Conclusion

Custom Hooks are a powerful feature in React that enhances component reusability and modularity. By extracting logic into hooks, developers can build scalable and maintainable applications efficiently.

---

Now you can create your own Custom Hooks and simplify your React applications! 🚀

