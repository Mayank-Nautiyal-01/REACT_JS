# Axios: A Promise-Based HTTP Client for JavaScript

## Introduction
Axios is a popular JavaScript library used for making HTTP requests from the browser and Node.js. It provides a simple API and powerful features like request and response interception, automatic JSON data transformation, and error handling.

## Why Use Axios?
- Supports modern JavaScript with Promises.
- Works in both browser and Node.js environments.
- Simplifies error handling.
- Supports request/response interception.
- Allows setting a global base URL for API calls.
- Provides built-in support for request cancellation and timeout handling.

---

## Installation
To install Axios, use either npm or yarn:

```bash
npm install axios
```

or

```bash
yarn add axios
```

---

## Example: Fetching Movie Data Using Axios

### Project Structure:
```
project/
├── src/
│   ├── components/
│   │   ├── Card.js
│   ├── pages/
│   │   ├── Movie.js
│   ├── services/
│   │   ├── getMovies.js
│   ├── App.js
│   ├── index.js
```

### Step 1: Creating the Axios Service
We create an Axios instance for making API requests in `getMovies.js`:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: "http://www.omdbapi.com/"
});

function GetMovies() {
  return api.get("?s=Avengers&apikey=176584d2");
}

export default GetMovies;
```

### Step 2: Fetching Data in the `Movie` Component
We call the `GetMovies` function inside `Movie.js` to fetch data:

```javascript
import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import GetMovies from '../services/getMovies';

function Movie() {
    const [data, setData] = useState([]);

    const getMovieData = async () => {
        try {
            const res = await GetMovies();
            setData(res.data.Search);
        } catch (error) {
            console.log("Error message:", error.message);
            console.log("Error status:", error.response.status);
            console.log("Error data:", error.response.data);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <ul className="flex flex-wrap justify-center gap-4 p-4">
            {data.map((curElem) => (
                <Card key={curElem.imdbID} movieData={curElem} />
            ))}
        </ul>
    );
}

export default Movie;

##Axios error handling, particularly with this approach:

javascript
Copy
Edit
console.log("Error message:", error.message);
console.log("Error status:", error.response.status);
console.log("Error data:", error.response.data);
Why Is This Useful?
Clear Debugging Information:

error.message provides a general error description.

error.response.status gives the HTTP status code, helping diagnose issues like:

404 → Not Found

500 → Internal Server Error

401 → Unauthorized

error.response.data gives additional details from the server.

Handles Different Error Scenarios:

Network Issues: If no response is received, error.request helps detect network failures.

Server Errors: If the server returns an error, error.response helps diagnose the issue.

Request Configuration Errors: If Axios is misconfigured, error.message helps identify the problem.

Better User Experience:

Instead of showing a generic "Something went wrong" message, you can display specific error messages based on error.response.status.
```

### Step 3: Displaying Movie Cards
The `Card` component is responsible for displaying movie details:

```javascript
import React from 'react';

function Card({ movieData }) {
  const { Poster, imdbID } = movieData;
  return (
    <li className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-64 m-4">
      <div className="relative">
        <img 
          src={Poster} 
          alt={imdbID}
          className="w-full h-80 object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <a href="#" className="block text-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600 transition">
              Watch Now
            </button>
          </a>
        </div>
      </div>
    </li>
  );
}

export default Card;
```

### Step 4: Integrating the `Movie` Component in `App.js`

```javascript
import Movie from './pages/Movie';

function App() {
  return (
    <div>
      <Movie/>
    </div>
  );
}

export default App;
```

---

## Axios vs Fetch: Why Axios is Better?

While JavaScript has a built-in `fetch` API for making HTTP requests, Axios provides several advantages:

| Feature           | Axios                         | Fetch                         |
|------------------|-----------------------------|-------------------------------|
| Automatic JSON Parsing | Yes | No (requires `.json()` method) |
| Request Timeout | Yes (built-in support) | No (requires manual implementation) |
| Interceptors | Yes | No |
| Request Cancellation | Yes (using `CancelToken`) | No (complex workarounds required) |
| Error Handling | Provides detailed error objects | Errors only occur on network failure, making it harder to handle HTTP errors |
| Default Headers | Easily configurable | Needs manual configuration |
| Simplicity | More user-friendly API | Requires more boilerplate code |

### Example: Fetch vs Axios
#### Using Fetch:
```javascript
fetch("http://www.omdbapi.com/?s=Avengers&apikey=176584d2")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));
```
- Requires `.json()` to parse response.
- Errors only occur on network failures, so HTTP errors (like 404 or 500) must be manually handled.
- No built-in timeout support.

#### Using Axios:
```javascript
axios.get("http://www.omdbapi.com/?s=Avengers&apikey=176584d2")
  .then(response => console.log(response.data))
  .catch(error => console.log("Error:", error));
```
- Automatically parses JSON.
- Provides better error handling with status codes.
- Supports request timeouts and cancellations.

---

## Conclusion
Axios simplifies HTTP requests in React applications. Using an Axios service (`getMovies.js`), we can efficiently fetch movie data from the OMDB API, handle errors, and display results in a structured format.

Compared to Fetch, Axios provides automatic JSON parsing, better error handling, timeout support, and simpler request management, making it a superior choice for API interactions in JavaScript applications.

Happy Coding! 🚀

