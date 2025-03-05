# Dark Mode Toggle in React

## Overview
This project demonstrates a simple **Dark Mode Toggle** feature using **React** and **Tailwind CSS**. The state is managed in `App.js`, and it is passed as a prop to `ToggleComponent.js`. The toggle switch visually transitions between light and dark mode.

## Features
- Implements **state management** with `useState`.
- Uses **props** to pass state and functions between components.
- Styled with **Tailwind CSS** for responsiveness and animations.
- Includes a **toggle switch** for switching themes.



## Code Explanation

### `App.js` (Manages State & Passes Props)
```jsx
import { useState } from 'react';
import ToggleComponent from './components/ToggleComponent';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* Passing state and function as props */}
      <ToggleComponent darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default App;
```

### `ToggleComponent.js` (Handles UI & Toggle Button)
```jsx
function ToggleComponent({ darkMode, setDarkMode }) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <h1 className="text-3xl font-bold mb-5">Dark Mode Toggle</h1>
        
        {/* Toggle Button */}
        <div
        onClick={() => setDarkMode(!darkMode)}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
        >
            <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition duration-300 ${darkMode ? "translate-x-8" : "translate-x-0"}`}></div>
        </div>
    </div>
  );
}

export default ToggleComponent;
```

## How It Works
- The **state** (`darkMode`) is **managed in `App.js`**.
- The `setDarkMode` function is **passed down** to `ToggleComponent` as a **prop**.
- Clicking the **toggle button** updates the state.
- The **background color and text color** change dynamically based on the `darkMode` state.
- A **smooth transition effect** is applied using Tailwind CSS.


