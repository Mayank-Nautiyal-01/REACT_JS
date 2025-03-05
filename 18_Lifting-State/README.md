# Lifting State Up in React

## What is Lifting State Up?
In React, **Lifting State Up** is a pattern used when multiple components need to share the same state. Instead of managing state separately in child components, we move (or "lift") the state to the closest common parent. This way, the parent component manages the state, and the child components receive the necessary data and callbacks as props.

## Why Use Lifting State Up?
- Ensures **data consistency** across multiple components.
- Reduces **redundant state** in child components.
- Simplifies **state management** by centralizing it in one place.
- Improves **component reusability** by making child components stateless.

---

## Example: Lifting State Up

### Scenario
We have two child components:
1. **InputComponent** → Accepts a name input.
2. **DisplayComponent** → Displays the entered name.

Instead of maintaining state separately in `InputComponent`, we lift it up to the parent `ParentComponent`.

---

## Code Implementation

### 1. Parent Component (`ParentComponent.js`)
```jsx
import { useState } from "react";
import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";

function ParentComponent() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Lifting State Up Example</h1>
      <InputComponent setName={setName} />
      <DisplayComponent name={name} />
    </div>
  );
}

export default ParentComponent;
```
✔ **What’s happening?**
- The `name` state is managed in `ParentComponent`.
- `setName` function is passed as a **prop** to `InputComponent` so it can update the name.
- `name` is passed as a **prop** to `DisplayComponent` so it can display the updated value.

---

### 2. Input Component (`InputComponent.js`)
```jsx
function InputComponent({ setName }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default InputComponent;
```
✔ **What’s happening?**
- The input field takes user input.
- When the user types, `onChange` updates the **state in ParentComponent** via `setName`.

---

### 3. Display Component (`DisplayComponent.js`)
```jsx
function DisplayComponent({ name }) {
  return (
    <div>
      <h2>Entered Name: {name}</h2>
    </div>
  );
}

export default DisplayComponent;
```
✔ **What’s happening?**
- It receives `name` as a prop from `ParentComponent`.
- Displays the updated name **without managing any state internally**.

---

## How Does Lifting State Up Work in This Example?

| **Component**       | **Manages State?** | **Receives Data from Parent?** |
|---------------------|------------------|-----------------------------|
| **ParentComponent** | ✅ (Manages `name` state) | ❌ |
| **InputComponent**  | ❌ | ✅ (Receives `setName` function) |
| **DisplayComponent** | ❌ | ✅ (Receives `name` prop) |

### 💡 Key Learning:
- `InputComponent` **updates** the state in `ParentComponent` using `setName`.
- `DisplayComponent` **displays** the updated state from `ParentComponent`.


