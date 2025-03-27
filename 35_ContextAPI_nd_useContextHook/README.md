# Context API & useContext Hook in React

## Introduction
The **Context API** in React provides a way to pass data through the component tree without having to pass props manually at every level. It is mainly used for **global state management** when multiple components need access to the same data.

The **useContext Hook** is a simpler way to consume the data from the Context API in functional components.

## Steps to Create Context API & useContext Hook

### Step 1: Create a Context
We use `createContext()` from React to create a context.

```jsx
import { createContext } from "react";

// Step 1: Create Context
export const BioContext = createContext();
```

### Step 2: Create a Provider Component
The **Provider Component** is responsible for holding the state that needs to be shared across multiple components.

```jsx
export const BioProvider = ({ children }) => {
    const myName = "Mayank";
    const myAge = 24;
    
    return (
        <BioContext.Provider value={{ myName, myAge }}>
            {children}
        </BioContext.Provider>
    );
};
```

### Step 3: Wrap the Application with the Provider
In `App.js`, we wrap our components inside the `BioProvider`, so they can access the shared data.

```jsx
import Home from './Context_Api/Home';
import { BioProvider } from './Context_Api/Index';

function App() {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  );
}

export default App;
```

### Step 4: Use useContext Hook to Consume Data
In any component where we need the shared data, we use the `useContext` Hook.

```jsx
import React, { useContext } from 'react';
import { BioContext } from './Index';

function Home() {
   // Step 4: Access Context Data
   const { myName, myAge } = useContext(BioContext);
   
   return (
       <h1>Hello, my name is {myName} and my age is {myAge}</h1>
   );
}

export default Home;
```

## Explanation of the Code
1. **Creating Context**: We first create a context using `createContext()` and store it in `BioContext`.
2. **Creating Provider**: The `BioProvider` component holds the data and uses `BioContext.Provider` to share it.
3. **Wrapping Components with Provider**: In `App.js`, we wrap our component tree inside `BioProvider`.
4. **Accessing Data with useContext**: The `Home` component uses `useContext(BioContext)` to access the values stored in the provider.

## Advantages of Context API
- Avoids **prop drilling** (passing props manually at every level).
- Provides a **centralized state** management system.
- Improves **code maintainability** and **readability**.

This implementation makes it easier to share global state across multiple components efficiently!

