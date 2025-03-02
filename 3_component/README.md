

### **1. Understanding Component Reusability**
- In React, components allow you to **reuse UI elements** without rewriting code.
- Instead of manually writing the same structure multiple times, you create a **single component** (`MovieCard`) and use it wherever needed.

---

### **2. How Your Code Shows Reusability**
```jsx
function App() {
  return (
    <div>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
```
🔹 **Here, `MovieCard` is used four times**, meaning:
- The same component structure is applied multiple times.
- If you update `MovieCard`, all instances will automatically reflect the change.

---

### **3. How `MovieCard` is Defined**
```jsx
const MovieCard = () => {
  return (
    <div>
      <div>
        <img src="dw.jpg" width="20%" height="20%" />
      </div>
      <h1>Name: Deadpool & Wolverine</h1>
      <p>
        Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him...
      </p>
    </div>
  );
};
```
🔹 **What this does:**  
- Defines a **reusable** UI structure with:
  - **Image (`img` tag)**  
  - **Movie Title (`h1` tag)**  
  - **Description (`p` tag)**  

---
