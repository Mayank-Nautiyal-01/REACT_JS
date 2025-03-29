# useCallback Hook in React

## Introduction

The `useCallback` hook in React is used to **memoize functions**, preventing them from being recreated on every render. This is particularly useful when passing functions as props to child components wrapped with `React.memo`, as it avoids unnecessary re-renders.

---

## Example: Using `useCallback`

### **Code Implementation**

```jsx
import { memo, useCallback, useState } from 'react';

const Button = memo(({ onClick, children }) => {
    console.log(`Rendering button: ${children}`);
    return <button onClick={onClick}>{children}</button>;
});

function UseCallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Increment inside");
        setCount((prev) => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        console.log("Decrement inside");
        setCount((prev) => prev - 1);
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}

export default UseCallback;
```

---

## Explanation

1. **Button Component with `memo`**: The `Button` component is wrapped with `memo()` to prevent unnecessary re-renders unless its props change.
2. **`useCallback` Usage**:
   - The `increment` and `decrement` functions are memoized using `useCallback`, ensuring they are not recreated on every render.
   - Since the dependency array is `[]`, the function remains the same across renders.
3. **Optimized Re-rendering**:
   - Without `useCallback`, the `Button` component would **re-render every time** the parent component renders, even if the function reference hasn’t changed.
   - With `useCallback`, the `Button` only re-renders if its props actually change.

---

## What Happens If We Don’t Use `useCallback`?

### **Without `useCallback`**:
```jsx
const increment = () => {
    console.log("Increment inside");
    setCount((prev) => prev + 1);
};

const decrement = () => {
    console.log("Decrement inside");
    setCount((prev) => prev - 1);
};
```
### **Issue:**
- Since functions in JavaScript are objects, every render creates **new function instances**.
- The `Button` component wrapped in `memo()` **will still re-render** because the function reference changes.

### **With `useCallback`**:
- The function reference remains **the same** unless dependencies change.
- The `Button` component **won’t re-render unnecessarily**.

---

## When to Use `useCallback`
✅ Use `useCallback` when:
- Passing functions as props to `React.memo` components.
- Preventing child components from unnecessary re-renders.
- Avoiding unnecessary function recreation when dependencies remain unchanged.

🚫 **Do not use `useCallback` unnecessarily**, as it adds complexity and memory overhead.

---

## Conclusion
- `useCallback` **prevents function recreation** across renders, helping optimize performance.
- It works well **with `React.memo`** to reduce unnecessary re-renders.
- **Use it wisely** where function references impact rendering behavior.

