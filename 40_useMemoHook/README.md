# useMemo Hook in React.js

## Introduction

The `useMemo` hook in React is used to optimize performance by memoizing the result of an expensive computation. It ensures that a function is only re-evaluated when its dependencies change, reducing unnecessary calculations and improving efficiency.

## Example Explanation

The following example demonstrates the use of `useMemo` in a React application.

### File Structure:
```
- src/
  - App.js
  - Memo/
    - UseMemo.js
```

### `UseMemo.js`
```jsx
import React, { useMemo, useState } from 'react';

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []);
  // const total = sum();  // Without useMemo, this would run on every render

  return <p>Sum: {total}</p>;
};

function UseMemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />
      <button onClick={() => setCount(count + 1)}>
        Re-render Parent
      </button>
      <p>Parent re-render: {count}</p>
    </div>
  );
}

export default UseMemo;
```

### `App.js`
```jsx
import React from 'react';
import UseMemo from './Memo/UseMemo';

function App() {
  return (
    <div>
      <UseMemo />
    </div>
  );
}

export default App;
```

## How `useMemo` Works in This Example

1. **Expensive Calculation in `ExpensiveComponent`**
   - The function `sum` performs a heavy computation (looping a billion times).
   - Normally, every render would trigger this function, causing performance issues.

2. **Optimization Using `useMemo`**
   - `useMemo` is used to memoize the result of `sum`.
   - The computation only runs once when the component mounts, preventing unnecessary re-execution.

3. **Behavior of `useMemo` in the Application**
   - Clicking "Re-render Parent" updates `count` but does not trigger recalculation of `sum`.
   - Without `useMemo`, the expensive function would execute every time the parent re-renders.

## Expected Behavior
1. Clicking the "Re-render Parent" button updates `count` without recalculating `sum`.
2. The sum calculation only runs once, as it is memoized using `useMemo`.

## Conclusion
Using `useMemo` in React helps optimize performance by preventing expensive calculations from running on every render. It ensures computations only happen when necessary, making applications more efficient. In this example, `useMemo` is used to store the result of an expensive function and only recalculates when its dependencies change.

