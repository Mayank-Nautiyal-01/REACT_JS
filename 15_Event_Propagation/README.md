# Event Propagation in React

## What is Event Propagation?
Event propagation refers to how events travel through the DOM tree in response to user actions. There are **two types** of event propagation in JavaScript:
1. **Event Bubbling** (Default Behavior)
2. **Event Capturing** (Use `onClickCapture` in React)

---

## 1️⃣ Event Bubbling Example
### 🔹 How Event Bubbling Works
- In **bubbling**, the event starts from the target (child element) and propagates up to its ancestors.
- If an event occurs on a child element, it will **trigger the same event** on its parent and then on its grandparent.

### 📝 Example Code (Event Bubbling)
```jsx
function EventPropagation() {
  const handleGrandParent = () => {
    console.log("grand parent clicked");
  };

  const handleParentClick = () => {
    console.log("parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    console.log("child clicked");
    // event.stopPropagation(); // Uncomment this to stop bubbling
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div onClick={handleGrandParent} className="px-14 py-10 bg-blue-300 border-4 border-blue-500">
        <div onClick={handleParentClick} className="px-13 py-9 bg-green-300 border-4 border-green-500">
          <button onClick={handleChildClick} className="px-6 py-4 text-white font-semibold bg-red-300 border-4 border-red-500">
            Child Div
          </button>
        </div>
      </div>
    </div>
  );
}
export default EventPropagation;
```

### 🔍 **Output in Console when clicking the Child Div:**
```
SyntheticBaseEvent
child clicked
parent clicked
grand parent clicked
```

### 🛑 **Stopping Bubbling:**
- If we **add** `event.stopPropagation();` inside `handleChildClick()`, the event **won't propagate** to parent elements.
- Clicking the **Child Div** will only log:
  ```
  SyntheticBaseEvent
  child clicked
  ```

---

## 2️⃣ Event Capturing Example
### 🔹 How Event Capturing Works
- In **capturing**, the event starts from the **root (grandparent)** and propagates **down** to the target (child element).
- In React, use `onClickCapture` instead of `onClick` to enable **event capturing**.

### 📝 Example Code (Event Capturing)
```jsx
function EventPropagation() {
  const handleGrandParent = (event) => {
    console.log("grand parent clicked");
    event.stopPropagation(); // Stops event from reaching child elements
  };

  const handleParentClick = () => {
    console.log("parent clicked");
  };

  const handleChildClick = () => {
    console.log("child clicked");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div onClickCapture={handleGrandParent} className="px-14 py-10 bg-blue-300 border-4 border-blue-500">
        <div onClickCapture={handleParentClick} className="px-13 py-9 bg-green-300 border-4 border-green-500">
          <button onClickCapture={handleChildClick} className="px-6 py-4 text-white font-semibold bg-red-300 border-4 border-red-500">
            Child Div
          </button>
        </div>
      </div>
    </div>
  );
}
export default EventPropagation;
```

### 🔍 **Output in Console when clicking the Child Div:**
```
grand parent clicked
parent clicked
child clicked
```

### 🛑 **Stopping Capturing:**
- If `event.stopPropagation();` is added inside `handleGrandParent()`, the event **won't reach** the parent and child elements.
- Clicking the **Child Div** will only log:
  ```
  grand parent clicked
  ```

---

## 🔥 **Event Bubbling vs Event Capturing (Comparison Table)**
| Feature            | Event Bubbling (`onClick`) | Event Capturing (`onClickCapture`) |
|------------------|---------------------|----------------------|
| Event flow       | Bottom ➡ Up          | Top ➡ Down           |
| Trigger order    | Child → Parent → Grandparent | Grandparent → Parent → Child |
| Default behavior | Yes                 | No (explicitly enabled using `onClickCapture`) |
| Stops propagation | `event.stopPropagation();` | `event.stopPropagation();` |

---

## Conclusion 🚀
- **Bubbling** is the **default** event propagation in React.
- **Capturing** can be used when you need the event to be handled from **top to bottom**.
- You can stop propagation at any point using `event.stopPropagation();`.
- Use **bubbling** for most cases; **capturing** is useful for specific use cases like global event listeners.


