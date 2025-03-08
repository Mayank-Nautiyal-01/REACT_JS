
## 🎯 **Todo List Project 


- Kaise Kaam Karta Hai?**  

Yeh ek **React-based** Todo List hai jo users ko tasks add, delete, aur complete karne ki facility deta hai. Saare tasks **localStorage** me store hote hain taaki refresh hone ke baad bhi data na ude.  

## **Project Structure & Working**  

### 📂 **1. `App.js` (Entry Point)**  
Yeh project ka **main component** hai jo `Todo.js` ko render karta hai. Iska kaam sirf **main Todo Component** ko dikhana hai.  

```jsx
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

export default App;
```
✔️ **Kaise Work Karta Hai?**  
- `App.js` React ka **root component** hai jo `<Todo />` component ko render karta hai.  
- Saara logic **Todo.js** me likha gaya hai, toh aage usko samjhte hain.  

---

### 📂 **2. `Todo.js` (Main Logic)**  
Yeh **poora Todo ka brain** hai, jo task add, delete, complete mark karne ka kaam karta hai.  

### 🛠️ **Key Features**  
1. **Task List ka State Maintain Karna**  
2. **Task Add Karna**  
3. **Task Delete Karna**  
4. **Task Complete/Incomplete Mark Karna**  
5. **LocalStorage me Data Save Karna**  

```jsx
const [task, setTask] = useState(() => getLocalStorageTodoData());
```
✔️ **Kaise Work Karta Hai?**  
- `useState()` ka use kiya gaya hai taaki task list ka **state maintain ho**.  
- `getLocalStorageTodoData()` function localStorage se data fetch karta hai, taaki refresh hone par tasks na udein.  

#### 📌 **Task Add Karne ka Logic**
```js
const handleFormSubmit = (taskContent) => {
  const newTask = { id: Date.now(), content: taskContent, completed: false };
  setTask([...task, newTask]);
};
```
✔️ **Kaise Work Karta Hai?**  
- Jab user naya task likh kar submit karega toh ek **naya object** banega.  
- `setTask([...task, newTask])` ki help se naya task **existing list me add ho jayega**.  

#### ❌ **Task Delete Karne ka Logic**
```js
const handleDeleteTodo = (taskId) => {
  const updatedTasks = task.filter((t) => t.id !== taskId);
  setTask(updatedTasks);
};
```
✔️ **Kaise Work Karta Hai?**  
- Jab delete button click hoga, `filter()` method se **us task ko hata diya jayega**.  
- `setTask(updatedTasks)` state update karega taaki UI se wo task remove ho jaye.  

#### ✅ **Task Complete/Incomplete Mark Karna**
```js
const handleCheckedTodo = (taskId) => {
  const updatedTasks = task.map((t) =>
    t.id === taskId ? { ...t, completed: !t.completed } : t
  );
  setTask(updatedTasks);
};
```
✔️ **Kaise Work Karta Hai?**  
- Jab user checkbox pe click karega, to `map()` function us task ko **toggle** kar dega (complete/incomplete).  
- `setTask(updatedTasks)` se UI me update ho jayega.  

---

### 📂 **3. `TodoForm.js` (Task Add Karne Wala Component)**  
Yeh sirf **input field aur submit button** dikhata hai.  

```jsx
const handleFormSubmit = (event) => {
  event.preventDefault();
  onAddTask(inputValue);
  setInputValue("");
};
```
✔️ **Kaise Work Karta Hai?**  
- Jab user task likh kar enter dabata hai, `onAddTask(inputValue)` call hota hai.  
- `setInputValue("")` se **input box reset ho jata hai**.  

---

### 📂 **4. `TodoList.js` (Task List Dikhane Wala Component)**  
Yeh **tasks ko UI me show karta hai** aur saath me delete aur complete buttons bhi deta hai.  

```jsx
<button onClick={() => onHandleCheckedTodo(data)}>
  <FaCheck size={18} />
</button>

<button onClick={() => onHandleDeleteTodo(data)}>
  <MdDeleteForever size={20} />
</button>
```
✔️ **Kaise Work Karta Hai?**  
- `onHandleCheckedTodo(data)` complete/incomplete mark karta hai.  
- `onHandleDeleteTodo(data)` task ko delete karta hai.  

---

### 📂 **5. `TodoDate.js` (Date & Time Show Karne Wala Component)**  
Yeh **real-time date aur time dikhata hai** jo har second update hota hai.  

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    setDateTime(`${formattedDate} - ${formattedTime}`);
  }, 1000);
  return () => clearInterval(interval);
}, []);
```
✔️ **Kaise Work Karta Hai?**  
- `useEffect()` ka use kiya gaya hai taaki **har second date/time update ho**.  
- `setInterval()` function time ko **refresh karta hai**.  

---

### 📂 **6. `TodoLocalStorage.js` (LocalStorage Handle Karne Wala Component)**  
Yeh tasks ko **localStorage me save aur retrieve** karta hai.  

```js
const todosKey = "reactTodo";
export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todosKey);
  return rawTodos ? JSON.parse(rawTodos) : [];
};

export const setLocalStorageTodoData = (task) => {
  localStorage.setItem(todosKey, JSON.stringify(task));
};
```
✔️ **Kaise Work Karta Hai?**  
- `getLocalStorageTodoData()` **saved tasks ko retrieve karta hai**.  
- `setLocalStorageTodoData(task)` naye tasks ko **localStorage me store karta hai**.  
- Jab bhi koi **naya task add/delete hota hai** toh localStorage me update ho jata hai.  

---