# Understanding Props in React

## What are Props?
Props (short for "properties") are a way to pass data from a parent component to a child component in React. They allow components to be dynamic and reusable by providing input values that can change over time.

## How Props Work
Props are passed as attributes to a component when it is used. Inside the child component, props can be accessed as an object.

### Example:

#### Parent Component (App.js)
```jsx
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Mayank" />
      <Greeting name="Tushar" />
    </div>
  );
}

export default App;
```

#### Child Component (Greeting.js)
```jsx
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

### Explanation:
- The `App` component passes a `name` prop to the `Greeting` component.
- The `Greeting` component receives `props` as an argument and accesses `props.name` to display a dynamic message.

