# How to Fetch API Data in React using useEffect

## Overview
This project demonstrates how to fetch data from an API using React's `useEffect` and `useState` hooks. The component fetches a list of posts from `jsonplaceholder.typicode.com` and displays them in an unordered list.

## Code Explanation

### 1. Import Dependencies
```jsx
import { useState, useEffect } from 'react';
```
- `useState` is used to store the fetched data.
- `useEffect` is used to perform the API call when the component mounts.

### 2. Define the Component
```jsx
function How_to_fetch() {
    const [apiData, setApiData] = useState([]);
    const API = "http://jsonplaceholder.typicode.com/posts";
```
- `apiData` stores the response data.
- `API` holds the API endpoint.

### 3. Fetch Data Inside useEffect
```jsx
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data);
            })
            .catch((error) => console.log(error));
    }, []);
```
- The API call is made when the component mounts.
- The response is converted to JSON and stored in `apiData`.
- Errors are logged in the console.
- The empty dependency array `[]` ensures the effect runs only once.

### 4. Render the Data
```jsx
    return (
        <div>
            <ul>
                data:
                {apiData.map((curData) => (
                    <li key={curData.id}>{curData.title}</li>
                ))}
            </ul>
        </div>
    );
```
- The fetched data is displayed as a list.
- Each item has a unique `key` based on `id`.

### 5. Export the Component
```jsx
export default How_to_fetch;
```
- This allows the component to be used in other parts of the project.
