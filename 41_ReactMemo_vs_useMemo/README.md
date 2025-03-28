# React.memo vs useMemo in React.js

## Introduction

Both `React.memo` and `useMemo` are used to optimize performance in React applications, but they serve different purposes.

- **`React.memo`** is a higher-order component that prevents unnecessary re-renders of a component if its props have not changed.
- **`useMemo`** is a React Hook that memoizes the result of an expensive computation so that it is not recalculated on every render unless its dependencies change.

## Example Explanation

The following examples demonstrate the differences between `React.memo` and `useMemo`, including a scenario where props are used.

### `React.memo` with Props Example

#### `MemoCount.js`
```jsx
import { memo } from 'react';
import { useRef } from 'react';

function MemoCount({bioData}) {
    const renderCount=useRef(0);
    console.log(renderCount);
  return (
    <div>
        <p>
            nothing changed here but Ive now rendered:
            <span>{renderCount.current++} time(s)</span>
            <p>my name is {bioData.name}</p>
        </p>
    </div>
  )
}

export default memo(MemoCount);
```

#### `ReactMemo.js`
```jsx
import { useState } from 'react';
import MemoCount from './MemoCount';

function ReactMemo() {
    const[count,setCount]=useState(0);

    const myBioData={
        name:"Mayank",
        age:30,
    }
  return (
    <>
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button> 
        </div>
        <MemoCount bioData={myBioData}/>
    </>
  )
}

export default ReactMemo;
```

### `useMemo` with Props Example

#### `UseMemo.js`
```jsx
import { useMemo, useState } from 'react';
import MemoCount from './MemoCount';

function UseMemo() {
    const[count,setCount]=useState(0);

    const myBioData=useMemo(()=>{
        return {
        name:"Mayank",
        age:30,
        }
    },[])
  return (
    <>
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button> 
        </div>
        <MemoCount bioData={myBioData}/>
    </>
  )
}

export default UseMemo;
```

## Key Differences Between `React.memo` and `useMemo`

| Feature          | `React.memo` | `useMemo` |
|----------------|------------|---------|
| **Purpose**    | Prevents unnecessary re-renders of components | Optimizes expensive calculations and object references |
| **Use Case**   | Wrapping functional components | Storing computed values or memoizing object references |
| **Dependency** | Props of the component | Dependency array |
| **Example**    | Skipping renders when props remain the same | Memoizing props to prevent re-renders |

## Conclusion
- Use **`React.memo`** when you want to **prevent re-rendering** of a component unless its props change.
- Use **`useMemo`** when you want to **memoize an expensive calculation or object reference** to avoid unnecessary re-creation.
- Combining `React.memo` with `useMemo` can help **prevent unnecessary re-renders caused by object identity changes**.

