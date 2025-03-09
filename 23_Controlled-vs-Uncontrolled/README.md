# React Controlled vs Uncontrolled Components

## Introduction
In React, form elements can be managed in two ways:
- **Controlled Components**
- **Uncontrolled Components**

Understanding the difference between these two approaches helps in choosing the right method for handling form inputs.

---

## Controlled Components
A **controlled component** is a component where React controls the form element's state. The form element's value is stored in a React state and updated via the `useState` hook or `setState` in class components.

### Example:
```jsx
import React, { useState } from 'react';

function ControlledInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Typed Name: {name}</p>
    </div>
  );
}

export default ControlledInput;
```

### Key Points:
- The `value` of the input field is controlled by React state (`name`).
- The `onChange` event updates the state whenever the user types something.
- React has full control over the input's value, making it predictable.

---

## Uncontrolled Components
An **uncontrolled component** is a component where the form element maintains its own state without being controlled by React. Instead, **Refs** (`useRef`) are used to access the value.

### Example:
```jsx
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Typed Name: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;
```

### Key Points:
- The input field is not controlled by React state.
- The value is accessed using `useRef` (`inputRef.current.value`).
- Useful when integrating with non-React code (e.g., working with DOM APIs).

---

## Comparison Table
| Feature | Controlled Component | Uncontrolled Component |
|---------|----------------------|------------------------|
| State Management | React state (`useState`) | DOM manages the state |
| Value Access | `value` prop and `onChange` handler | `useRef` (`inputRef.current.value`) |
| Predictability | High (React controls updates) | Low (Relies on DOM) |
| Performance | Slightly higher re-renders | No re-renders on typing |
| Use Case | Forms that require validation and controlled updates | Simple forms, integrating with non-React libraries |

---

## When to Use Which?
- **Use Controlled Components** when you need to validate input, enforce formatting, or update the UI dynamically.
- **Use Uncontrolled Components** when integrating with non-React applications or when you need to access form values without triggering re-renders.

### Conclusion
Both controlled and uncontrolled components have their use cases. For most React applications, **controlled components** are preferred because they provide better control over form inputs and UI behavior.

---

