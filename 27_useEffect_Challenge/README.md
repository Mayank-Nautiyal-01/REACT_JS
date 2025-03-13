# React Hook Challenge: Dynamic State Management and Document Title Update with useEffect

## Description
In this challenge, you will create a **React component** that dynamically manages state using the `useState` and `useEffect` hooks. This component will include:

1. A **counter** that increments when a button is clicked.
2. An **input field** where users can type their name.
3. The **document title** will update to show the current count dynamically.


## Implementation

### `EffectChallenge.js`
```jsx
import { useState, useEffect } from 'react';

function EffectChallenge() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // Update document title with count value
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    // Log name changes to console
    useEffect(() => {
        console.log(name);
    }, [name]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-96">
                <h1 className="text-3xl font-bold mb-4 text-emerald-400">useEffect Challenge</h1>

                <p className="text-lg font-semibold mb-2">Count: <span className="text-emerald-400">{count}</span></p>
                <button 
                    onClick={() => setCount(count + 1)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg transition-all mb-4"
                >
                    Increment
                </button>

                <p className="text-lg font-semibold mb-2">Name: <span className="text-emerald-400">{name}</span></p>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 rounded-lg text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your name"
                />
            </div>
        </div>
    );
}

export default EffectChallenge;
```

## Explanation
### `useState`
- **`count`**: Holds the counter value, initialized to `0`.
- **`name`**: Stores the name input from the user.

### `useEffect`
- **First `useEffect` Hook**:
  - Updates the **document title** whenever `count` changes.
- **Second `useEffect` Hook**:
  - Logs the `name` value to the console whenever it is updated.

## Running the Application
1. Add the component inside `App.js`:
   ```jsx
   import EffectChallenge from './EffectChallenge';
   
   function App() {
       return <EffectChallenge />;
   }
   
   export default App;


## Expected Behavior
- Clicking the **Increment** button updates the count and the document title.
- Typing in the input field updates the `name` state and logs changes in the console.
