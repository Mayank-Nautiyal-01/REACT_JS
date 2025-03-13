# Contact Form Example

## Overview
This project consists of a simple Contact Form implemented in React. The form collects user input, including username, email, and message, and logs the data upon submission. Two different implementations of state management are provided for handling form data.

## Project Structure
```
📂 src
│── 📂 components
│   │── 📄 ContactForm.js  (Uses a single state object for form handling)
│   │── 📄 ContactForm2.js (Uses multiple state variables for form handling)
│── 📄 App.js  (Renders ContactForm2 component)
│── 📄 index.js  (Entry point of the React app)
│── 📄 README.md  (Project documentation)
```

## Files and Explanation

### 1. `ContactForm.js`
- Uses **a single state object** (`useState`) to manage form fields.
- Handles input changes dynamically by updating the state based on the `name` attribute.
- Resets all fields after form submission.

### 2. `ContactForm2.js`
- Uses **multiple state variables** (`useState`) for `username`, `email`, and `message` separately.
- Each input field has its own state updater function.
- Resets all fields after form submission.

### 3. `App.js`
- Imports and renders the `ContactForm2` component.
- The `ContactForm` component is commented out, meaning `ContactForm2` is currently being used.



## Summary
- The project demonstrates **two ways** to manage form state in React.
- `ContactForm.js` uses **a single state object**.
- `ContactForm2.js` uses **multiple state variables**.
- `App.js` is set to render `ContactForm2` by default, but you can switch to `ContactForm` if needed.



