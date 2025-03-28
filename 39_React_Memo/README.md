# React.memo in React.js

## Introduction

`React.memo` is a higher-order component (HOC) that optimizes the performance of functional components by preventing unnecessary re-renders. It works by memoizing the rendered output of a component and only re-rendering it if its props change. This can significantly improve performance, especially in large applications with complex component trees.

## Example Explanation

The provided example demonstrates the use of `React.memo` in a React application.

### File Structure:
```
- src/
  - App.js
  - Memo/
    - ReactMemo.js
    - MemoCount.js
```

### `ReactMemo.js`
```jsx
import { useState } from 'react';
import MemoCount from './MemoCount';

function ReactMemo() {
    const [count, setCount] = useState(0);
  return (
    <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <MemoCount/>
    </>
  );
}

export default ReactMemo;
```

### `MemoCount.js`
```jsx
import { memo } from 'react';
import { useRef } from 'react';

function MemoCount() {
    const renderCount = useRef(0);
    console.log(renderCount);
  return (
    <div>
        <p>
            Nothing changed here but I've now rendered:
            <span>{renderCount.current++} time(s)</span>
        </p>
    </div>
  );
}

export default memo(MemoCount);
```

### `App.js`
```jsx
import ReactMemo from './Memo/ReactMemo';

function App() {
  return (
    <div>
      <ReactMemo/>
    </div>
  );
}

export default App;
```

## How `React.memo` Works in This Example

1. **State Management in `ReactMemo.js`**
   - The component maintains a state variable `count`.
   - Clicking the button updates `count`, causing the `ReactMemo` component to re-render.
   
2. **Using `React.memo` in `MemoCount.js`**
   - The `MemoCount` component keeps track of its render count using `useRef`.
   - It does not accept any props, meaning that, ideally, it should not re-render unless explicitly needed.
   - However, without `React.memo`, it would re-render every time `ReactMemo` re-renders.
   
3. **Performance Optimization with `React.memo`**
   - Wrapping `MemoCount` in `React.memo` ensures it only re-renders if its props change.
   - Since `MemoCount` does not receive any props, it will never re-render unless explicitly forced.
   - This optimizes the application by preventing unnecessary re-renders of `MemoCount` when `count` updates.

## Expected Behavior
1. Clicking the "Increment" button updates the `count` state in `ReactMemo`.
2. `ReactMemo` re-renders, but `MemoCount` does not.
3. The `console.log(renderCount);` statement in `MemoCount` does not trigger again because `MemoCount` is memoized.

## Conclusion
Using `React.memo` in functional components can significantly boost performance by preventing redundant re-renders. This is especially useful when dealing with complex UI elements, heavy computations, or large component trees. In this example, `MemoCount` is optimized using `React.memo`, ensuring it does not re-render unnecessarily, improving the efficiency of the application.

