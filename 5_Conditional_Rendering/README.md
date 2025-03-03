# React Conditional Rendering Examples


## 📌 Examples Included

### 1️⃣ **Ternary Operator (**``** Component)**

```jsx
const UserGreeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
};
```

✔ Uses the **ternary operator** (`? :`) to conditionally render UI.

### 2️⃣ **If-Else in Function (**``** Component)**

```jsx
const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
};
```

✔ Uses a **regular **``** statement** inside a function.

### 3️⃣ **Function Returning JSX (**``** Function)**

```jsx
const getButton = (isLoggedIn) => {
  return isLoggedIn ? <button>Log Out</button> : <button>Log In</button>;
};
```

✔ Returns JSX conditionally from a function, instead of a component.

---

## 🎯 Usage in `App.js`

```jsx
function App() {
  const isLoggedIn = true;
  return (
    <div>
      {/* Example 1: Ternary Operator */}
      <UserGreeting isLoggedIn={isLoggedIn} />
      
      {/* Example 2: If-Else Function */}
      <Greeting isLoggedIn={isLoggedIn} />
      
      {/* Example 3: Function Returning JSX */}
      <div>{getButton(isLoggedIn)}</div>
    </div>
  );
}
```

✅ Change `isLoggedIn = true` to `false` to test different outputs.

---

