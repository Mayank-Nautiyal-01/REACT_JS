# Props Drilling in React

## What is Props Drilling?
Props Drilling is a situation in React where data (props) is passed from a parent component to deeply nested child components, even when intermediate components do not need it. This leads to unnecessary prop forwarding, making the code harder to manage and maintain.

---

## Example of Props Drilling

### Component Hierarchy:
```
App → Parent → Child → GrandChild
```
Here, `App` has a `user` object, which is required only by `GrandChild`. However, it has to be passed through `Parent` and `Child`, even though they don’t need it.

### Code Example:
```jsx
import React from "react";

const GrandChild = ({ user }) => {
  return <h3>User: {user.name}</h3>; // GrandChild needs the 'user' prop
};

const Child = ({ user }) => {
  return <GrandChild user={user} />; // Passing 'user' prop to GrandChild
};

const Parent = ({ user }) => {
  return <Child user={user} />; // Passing 'user' prop to Child
};

const App = () => {
  const user = { name: "Mayank", age: 25 };

  return <Parent user={user} />; // Passing 'user' prop to Parent
};

export default App;
```

---

## Problems with Props Drilling

### 1. **Unnecessary Prop Forwarding**
   - `Parent` and `Child` don’t use `user`, yet they have to pass it down.
   
### 2. **Difficult to Maintain**
   - If a new component (`MiddleChild`) is added between `Child` and `GrandChild`, all components in the hierarchy must be updated to pass `user`.
   
### 3. **Decreased Reusability**
   - `Parent` and `Child` become tightly coupled with `user`, making them harder to reuse independently.

---

## Alternative: Using Context API to Avoid Props Drilling
Instead of passing props through every component, we can use the **Context API** to provide the `user` data globally.



## Key Takeaways
✅ **Props Drilling** makes the code complex and difficult to maintain.  
✅ **Context API** allows us to share data globally without passing props through multiple layers.  
✅ **Better Approach** – Using Context API or state management libraries like Redux, Recoil, or Zustand helps avoid unnecessary prop forwarding.  

---

### 🚀 Happy Coding! 😊

