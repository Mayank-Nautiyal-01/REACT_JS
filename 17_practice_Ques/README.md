# Question
Create a React component that loops through an object to display names and ages in the format: `name - age yrs old`. Then, use the `useState` hook to manage state and achieve the same result dynamically. Additionally, add a button to add a new user using `setState`.

# React useState Example

This project demonstrates the use of the `useState` hook in React to manage and update a list of users dynamically.


```

## Features
- Loops through an object to display names and ages in the format: `name - age yrs old`
- Uses the `useState` hook to manage the state of the users list
- Provides a button to add a new user dynamically using `setState`

## Topics Covered
By solving this question, the following concepts are covered:
- **React Functional Components**: Understanding how to create and use functional components in React.
- **useState Hook**: Managing state using the `useState` hook.
- **State Updates**: Updating state in React using the spread operator.
- **Rendering Lists in React**: Using `.map()` to dynamically render lists from state.
- **Event Handling**: Handling button click events to update state.
- **JSX Syntax**: Writing JSX to structure the UI.


## Code Explanation
### `State.js`
```javascript
import { useState } from "react";

function State() {
  const [users, setUsers] = useState([
    { name: 'John', age: 24 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 40 },
    { name: 'Fred', age: 23 },
  ]);

  // Function to add a new user dynamically
  const addUser = () => {
    const newUser = { name: 'Emma', age: 24 };
    setUsers([...users, newUser]); // Updating state
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((curElem, index) => (
          <li key={index}>
            {curElem.name} - {curElem.age} yrs old
          </li>
        ))}
      </ul>
      <button onClick={addUser}>Add User</button> {/* Button to update state */}
    </div>
  );
}

export default State;
```
### `App.js`
```javascript
import State from "./assets/components/hooks/State";

function App() {
  return (
    <div>
      <State />
    </div>
  );
}

export default App;
```


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Derived State in React

What is Derived State in React?

Derived state refers to data that is computed from existing state rather than being stored directly in the component’s state. Instead of duplicating data in the state, we calculate it on the fly based on the current state.

## **Features**

- Displays a list of users with their name and age.
- Uses **derived state** to compute:
  - The total number of users.
  - The average age of users.
- Provides a button to **add a new user dynamically** using `setState`.

## **Topics Covered**

By solving this question, the following concepts are covered:

- **Derived State in React** → Computing values from existing state instead of storing them separately.
- **useState Hook** → Managing state with the `useState` hook.
- **State Updates** → Updating state using the spread operator.
- **Array Methods (********`map`********\*\*\*\*, ************`reduce`************)** → Used for rendering lists and calculating averages.
- **Event Handling** → Button click updates state dynamically.
- **JSX Syntax** → Writing JSX to structure the UI.



## **Code Explanation**

### **`DerivedState.js`**

```javascript
import { useState } from "react";

function DerivedState() {
  // useState Hook: Manages the list of users as state
  const [users, setUsers] = useState([
    { name: 'John', age: 24 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 40 },
    { name: 'Fred', age: 23 },
  ]);

  // Function to add a new user dynamically
  const addUser = () => {
    const newUser = { name: 'Emma', age: 24 };
    setUsers([...users, newUser]); // Updating state by adding a new user
  };

  // Derived State: Count of users (computed from users array)
  const userCount = users.length;

  // Derived State: Average age of users (computed using reduce function)
  const averageAge = users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((curElem, index) => (
          <li key={index}>
            {curElem.name} - {curElem.age} yrs old
          </li>
        ))}
      </ul>
      <h4>Total Users: {userCount}</h4>
      <h4>Average Age: {averageAge.toFixed(2)}</h4>
      <button onClick={addUser}>Add User</button> {/* Button to update state */}
    </div>
  );
}

export default DerivedState;
```

#### **Where is Derived State Used?**

- `userCount` is **derived** from `users.length` instead of being stored separately.
- `averageAge` is **derived** from summing all ages in `users` and dividing by the count instead of storing it in state.
- This avoids redundant state variables and ensures the values stay in sync with the `users` state.

### **`App.js`**

```javascript
import DerivedState from "./assets/components/hooks/DerivedState";

function App() {
  return (
    <div>
      <DerivedState />
    </div>
  );
}

export default App;

