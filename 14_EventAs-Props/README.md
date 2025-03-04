# React Event Handling Example

## Overview
This React project demonstrates **event handling**, **passing events as props**, and **using functional components**. The project consists of an `App` component that renders multiple `Card` components. Clicking a button inside a `Card` triggers an event handled by the parent `App` component.


### `App.js` (Parent Component)
- Stores an array of `cardData` objects (each containing a `title` and `description`).
- Defines `handleCardClick`, which alerts the card title when a button inside `Card` is clicked.
- Passes data (`title`, `description`) and the event handler (`onCardClick`) to `Card` components.

#### **Code:**
```jsx
import React from 'react';
import Card from './components/Card';

function App() {
  const cardData = [
    { title: "Card 1", description: "This is the first card" },
    { title: "Card 2", description: "This is the second card" },
    { title: "Card 3", description: "This is the third card" },
  ];

  const handleCardClick = (title) => {
    alert(`Card clicked: ${title}`);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-300">React Event Handling Example</h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} onCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
```

### `Card.js` (Child Component)
- Receives `title`, `description`, and `onCardClick` as props.
- When the button is clicked, it calls `onCardClick(title)`, passing the card title to the parent.

#### **Code:**
```jsx
import React from 'react';

function Card({ title, description, onCardClick }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-60 text-center">
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
        onClick={() => onCardClick(title)}
      >
        Click
      </button>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
```

---

## **Key Concepts Explained**
### ✅ **Event Handling in React**
- The event (`onClick`) is passed from the **child (`Card`) to the parent (`App`)**.
- The function `handleCardClick` is **defined in `App.js`** and sent as a **prop** to `Card.js`.
- The child calls `onCardClick(title)`, executing the function in the parent.

### ✅ **Why Use Events as Props?**
- Allows **parent components to control child components**.
- Enables **reusable child components** with dynamic behavior.

### ✅ **Using `map()` to Render Components Dynamically**
- The `map()` function loops through `cardData` and creates a `Card` for each item.
- This is **better than manually writing each card**, making the code **scalable**.

