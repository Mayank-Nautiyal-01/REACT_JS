# React Event Handling and SyntheticBaseEvent

## **1. What is SyntheticBaseEvent?**
In React, event handling is managed using a system called `SyntheticEvent`. This is a wrapper around the browser’s native events to provide a consistent API across different browsers. It improves performance by event pooling, which means React **reuses event objects** for efficiency.

### **Example: Logging SyntheticBaseEvent**
```jsx
function handleClick(event){
  console.log(event); // Logs SyntheticBaseEvent
  console.log(event.type); // "click"
  console.log(event.target); // The clicked button element
}

function App() {
  return <button onClick={handleClick}>Click Me</button>;
}

export default App;
```
**Explanation:**
- `event` is a `SyntheticBaseEvent`, not a raw DOM event.
- It contains properties like `event.type` (`"click"`) and `event.target` (the clicked button).

---

## **2. Handling Events in React**
React events work differently from native DOM events:
- **Use camelCase** (`onClick` instead of `onclick`).
- **Pass function references**, not string handlers.

### **Example: Using Different Event Handling Methods**
```jsx
function App() {

  // Standard event handler
  function handleClick(event) {
    console.log(event.type); // Logs "click"
  }

  // Arrow function to show alert
  const handleWelcomeUser = (user) => {
    console.log(`Welcome dear ${user}`);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      
      {/* Inline arrow function */}
      <button onClick={() => alert("Button 2 clicked!!!")}>Click me 2</button>
      
      {/* Passing arguments to event handlers */}
      <button onClick={() => handleWelcomeUser("Mayank")}>ClickMe3</button>
    </>
  );
}

export default App;
```

### **Key Takeaways**
1. **Function Reference vs. Inline Arrow Functions:**
   - ✅ `onClick={handleClick}` (best for performance, no function recreation).
   - ⚠️ `onClick={() => handleClick()}` (creates a new function on every render, avoid in performance-critical components).

2. **Passing Arguments to Handlers:**
   - Use an **arrow function** inside `onClick`:
     ```jsx
     <button onClick={() => handleWelcomeUser("Mayank")}>Click Me</button>
     ```
     If you write `onClick={handleWelcomeUser("Mayank")}`, the function executes immediately, which is incorrect.

3. **Why SyntheticEvent?**
   - React **pools** events for optimization.
   - If you need to access an event asynchronously, call `event.persist()`:
     ```jsx
     function handleClick(event) {
       event.persist(); // Prevent event pooling
       setTimeout(() => {
         console.log(event.type); // This will now work
       }, 1000);
     }
     ```

---

## **3. Summary Table**

| Concept | Example |
|---------|---------|
| Function Reference | `<button onClick={handleClick}>Click Me</button>` |
| Inline Arrow Function | `<button onClick={() => alert("Clicked!")}>Click</button>` |
| Passing Arguments | `<button onClick={() => handleWelcomeUser("Mayank")}>Click</button>` |
| SyntheticEvent | `console.log(event.type, event.target)` |
| Event Persisting | `event.persist()` before using event asynchronously |



