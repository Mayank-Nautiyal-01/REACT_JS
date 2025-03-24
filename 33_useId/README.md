# useId in React

## Introduction
`useId` is a React Hook introduced in React 18 that generates unique, stable IDs for accessibility-related attributes. It is particularly useful in form elements, ensuring consistent IDs across server and client rendering.

## Why Use `useId`?
- Generates unique IDs that are stable across renders.
- Avoids ID duplication when rendering multiple components.
- Prevents hydration mismatches in server-side rendering (SSR).

## Installation
Ensure you have React 18 or later installed:
```sh
npm install react
```

## Usage Example
```jsx
import React, { useId } from "react";

const Form = () => {
  const nameId = useId();
  const emailId = useId();

  return (
    <form>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <input id={nameId} type="text" />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input id={emailId} type="email" />
      </div>
    </form>
  );
};

export default Form;
```

## How It Works
- `useId` generates unique IDs (`nameId` and `emailId`).
- These IDs are assigned to the `htmlFor` attribute in `<label>` and `id` in `<input>`.
- Ensures proper accessibility and prevents ID collisions.

## Best Practices
- Use `useId` only when necessary (e.g., accessibility, form inputs, ARIA attributes).
- Avoid using it for keys in lists (`key` prop) – use stable identifiers instead.

## Limitations
- IDs are unique within a single rendering session but not across page reloads.
- Not suitable for dynamically generated elements that require persistent identifiers.

## Conclusion
`useId` is a simple yet powerful tool for managing unique identifiers in React applications, ensuring a consistent and accessible user experience.