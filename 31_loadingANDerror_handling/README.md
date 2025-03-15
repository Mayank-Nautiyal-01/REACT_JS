# API Fetching in React using Promises and Async/Await

## Overview
Fetching data from APIs is a common task in web development. This guide covers two ways to fetch data in a React component:

1. **Using Promises (`.then` and `.catch`)**
2. **Using `async/await`**

We also handle:
- Loading state (to show a loading indicator while fetching data)
- Error handling (to display errors if the request fails)

---

## 1️⃣ Fetching API using Promises

```jsx
import { useState, useEffect } from "react";

function ApiFetchWithPromises() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return <h1>Pokemon: {pokemon.name}</h1>;
}

export default ApiFetchWithPromises;
```

### How it works:
- The `fetch()` function returns a **Promise**.
- `.then(res => res.json())` processes the response.
- `.then(data => setPokemon(data))` updates the state.
- `.catch(error => setError(error))` handles errors.
- `useEffect()` ensures fetching happens when the component mounts.

---

## 2️⃣ Fetching API using Async/Await

```jsx
import { useState, useEffect } from "react";

function ApiFetchWithAsyncAwait() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return <h1>Pokemon: {pokemon.name}</h1>;
}

export default ApiFetchWithAsyncAwait;
```

### How it works:
- `async function fetchPokemon()` allows us to use `await`.
- `await fetch(API)` waits for the response.
- `await response.json()` converts it to JSON.
- `try/catch` handles errors.
- `finally` ensures `setLoading(false)` runs after fetching.

---

## 🛠 Key Differences
| Feature            | Promises (`.then`)       | Async/Await          |
|------------------|----------------------|--------------------|
| Readability      | More callbacks       | Cleaner & readable |
| Error Handling   | `.catch()` required  | `try/catch` block  |
| Syntax           | Chained `.then()`    | Looks synchronous  |

---

## 🚀 Conclusion
Both approaches work, but **async/await** provides better readability and error handling. Choose the one that fits your project best!



