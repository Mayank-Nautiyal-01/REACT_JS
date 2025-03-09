## **Short Circuit Evaluation in React JS**
Short Circuit Evaluation is a technique used in JavaScript (and React) where logical operators (`&&`, `||`, `? :`) are used to conditionally render components or values without needing an explicit `if-else` statement.

### **Logical Operators Used in Short Circuit Evaluation**
1. **AND (`&&`) Operator**:  
   - If the left operand is `true`, it returns the right operand.
   - If the left operand is `false`, it stops execution and returns `false`.

   **Example:**
   ```js
   true && "Hello"  // Output: "Hello"
   false && "Hello" // Output: false
   ```

2. **OR (`||`) Operator**:  
   - If the left operand is `true`, it stops execution and returns the left operand.
   - If the left operand is `false`, it returns the right operand.

   **Example:**
   ```js
   true || "Hello"  // Output: true
   false || "Hello" // Output: "Hello"
   ```

3. **Ternary (`? :`) Operator**:  
   - If the condition is `true`, it executes the first statement.
   - If the condition is `false`, it executes the second statement.

   **Example:**
   ```js
   isLoggedIn ? "Welcome Back!" : "Please Login";
   ```

---

## **Explanation of the Given Code**
### **1️⃣ State Variables**
```js
const [isLoggedIn, setLoggedIn] = useState(true);
const [user, setUser] = useState("");
```
- `isLoggedIn`: Keeps track of whether the user is logged in (`true` or `false`).
- `user`: Stores the name of the user.

---

### **2️⃣ Short Circuit Evaluation Used in JSX**
#### **AND (`&&`) Operator**
```jsx
{isLoggedIn && <p className="text-green-600 font-medium">You are logged in</p>}
```
- If `isLoggedIn` is `true`, it displays **"You are logged in"**.
- If `isLoggedIn` is `false`, nothing is displayed.

#### **Ternary (`? :`) Operator**
```jsx
<p className="mt-2 text-lg text-gray-700">
  {user ? `Hello, ${user}` : "You are logged in"}
</p>
```
- If `user` is **not empty**, it displays `"Hello, [user]"`.
- If `user` is **empty**, it displays `"You are logged in"`.

---

### **3️⃣ Event Handlers in Buttons**
#### **Toggle Login State**
```jsx
<button onClick={() => setLoggedIn(!isLoggedIn)}>
  Toggle Login State
</button>
```
- Toggles the `isLoggedIn` state between `true` and `false`.

#### **Set User Name**
```jsx
<button onClick={() => setUser("Mayank Nautiyal")}>
  Set User
</button>
```
- Sets `user` to `"Mayank Nautiyal"`.

#### **Clear User Name**
```jsx
<button onClick={() => setUser("")}>
  Clear User
</button>
```
- Clears the `user` value (sets it to an empty string `""`).

---

## **How the Component Works?**
1. Initially:
   - `isLoggedIn = true` → `"You are logged in"` is shown.
   - `user = ""` → `"You are logged in"` is displayed (instead of a username).

2. When clicking **"Toggle Login State"**:
   - If logged in → Logs out.
   - If logged out → Logs in.

3. When clicking **"Set User"**:
   - It sets `user` to `"Mayank Nautiyal"`, so `"Hello, Mayank Nautiyal"` appears.

4. When clicking **"Clear User"**:
   - `user` is set to `""`, so `"You are logged in"` appears again.

---

## **Conclusion**
- **Short Circuit Evaluation** is used for conditional rendering without `if-else`.
- The `&&` operator helps in **conditionally displaying UI** elements.
- The `? :` operator helps in **conditionally setting values**.
- This method makes React code **simpler and more readable**. 🚀