# Why This Approach is Bad for Fetching API Data in React

## 🚨 Problematic Code
```jsx
import {useState} from 'react'

function HowNOTtoFetchAPI () {
 const [apiData, setApiData] = useState([]);

    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => { setApiData(data); })
      .catch((error) => console.log(error));
  
  return (
    <div>
       <ul>
        <h2>Data:</h2>
        {apiData.map((curData) => (
            <li key={curData.id}>{curData.title}</li>
        ))}
       </ul>
    </div>
  );
}

export default HowNOTtoFetchAPI;
```

## ❌ Why This is a Bad Approach
### 1️⃣ Infinite Re-renders
- The `fetch` call is inside the component body.
- Each time the state (`apiData`) updates, React re-renders the component.
- On every render, the `fetch` function runs again, leading to an **infinite loop** of API requests.

### 2️⃣ Unnecessary API Calls
- Every render triggers a new API request.
- This floods the network with unnecessary requests, **slowing down the application**.

### 3️⃣ No Side Effect Handling
- API calls should be considered **side effects**.
- They should be executed inside a **useEffect** hook, ensuring that they run at the right time.

