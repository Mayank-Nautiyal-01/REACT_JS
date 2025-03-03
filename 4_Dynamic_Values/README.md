# Dynamic Values in JavaScript and React

## Introduction
In JavaScript and React, **dynamic values** are values that can change based on user input, function calls, or external data (like API responses). Instead of hardcoding values, we use **variables, expressions, and function calls** to generate dynamic content.

---

## 1. Explaining Dynamic Values
**Dynamic values** allow us to create flexible and interactive applications. These values are **not fixed** and can change based on:
- User actions (e.g., input fields, button clicks)
- Data from APIs
- Calculations or logic inside the program

### Example:
```jsx
let name = "Mayank";
console.log(`Hello, ${name}!`); // Output: Hello, Mayank!
```
Here, `name` is a **dynamic value** because changing it will change the output.

---

## 2. Implementing Dynamic Values with Variables
We can store dynamic values in **variables** and use them in different parts of our code.

### Example in JavaScript:
```jsx
let age = 25;
console.log(`I am ${age} years old.`); // Output: I am 25 years old.

age = 30; // Changing the value dynamically
console.log(`Now, I am ${age} years old.`); // Output: Now, I am 30 years old.
```
🔹 The value of `age` changes dynamically, making the output flexible.

### Example in React:
```jsx
const MovieCard = () => {
  let movieName = "Deadpool & Wolverine";
  
  return <h1>Movie: {movieName}</h1>;
};
```
🔹 Here, `movieName` is a variable that holds a **dynamic value**.

---

## 3. Dynamic Values in Expressions
We can use **expressions** to dynamically compute values inside JavaScript and React.

### Example in JavaScript:
```jsx
let num1 = 10;
let num2 = 5;
console.log(`The sum is ${num1 + num2}.`); // Output: The sum is 15.
```
🔹 The sum is dynamically calculated **inside the template literal**.

### Example in React JSX:
```jsx
const App = () => {
  let num1 = 8;
  let num2 = 2;

  return <h1>Multiplication: {num1 * num2}</h1>; // Output: Multiplication: 16
};
```
🔹 JSX allows us to use **expressions inside `{}`**, making it possible to dynamically update UI elements.

---

## 4. Generating Dynamic Values with Function Calls
Instead of using fixed values, we can **call functions** to generate dynamic values.

### Example in JavaScript:
```jsx
function getGreeting(name) {
  return `Hello, ${name}!`;
}

console.log(getGreeting("Mayank")); // Output: Hello, Mayank!
console.log(getGreeting("Nikhil")); // Output: Hello, Nikhil!
```
🔹 Here, the function **returns a dynamic value** based on the input.

### Example in React:
```jsx
const getRandomNumber = () => Math.floor(Math.random() * 100);

const App = () => {
  return <h1>Random Number: {getRandomNumber()}</h1>;
};
```
🔹 The function **dynamically generates** a random number each time the component renders.

---

## Conclusion
- **Dynamic values** make applications interactive and adaptable.
- We can use **variables, expressions, and function calls** to generate them.
- React’s JSX allows dynamic values inside `{}` to update UI efficiently.

✅ **By using dynamic values, we can build powerful, reusable, and scalable applications!** 🚀

