# Registration Form in React

This repository demonstrates two different approaches to handling form state in a React registration form component:

1. **Using multiple `useState` hooks** (Less efficient approach) - [`Registration.js`](#registrationjs-using-multiple-usestate-hooks)
2. **Using a single `useState` object** (More efficient approach) - [`RegistrationForm2.js`](#registrationform2js-using-a-single-usestate-object)

---

## 1. `Registration.js` (Using Multiple `useState` Hooks)

### **Code Example:**
```jsx
import { useState } from "react";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phNo, setPhNo] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phNo":
        setPhNo(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, email, password, phNo });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="firstName" value={firstName} onChange={handleInputChange} />
      <input type="text" name="lastName" value={lastName} onChange={handleInputChange} />
      <input type="email" name="email" value={email} onChange={handleInputChange} />
      <input type="password" name="password" value={password} onChange={handleInputChange} />
      <input type="tel" name="phNo" value={phNo} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Registration;
```

### **Drawbacks of this approach:**
- Uses multiple `useState` hooks, which can make the component harder to maintain.
- More boilerplate code due to multiple state updates.
- Repetitive `setState` calls for each form field.

---

## 2. `RegistrationForm2.js` (Using a Single `useState` Object)

### **Code Example:**
```jsx
import { useState } from "react";

function RegistrationForm2() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
      <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
      <input type="email" name="email" value={user.email} onChange={handleInputChange} />
      <input type="password" name="password" value={user.password} onChange={handleInputChange} />
      <input type="tel" name="phNo" value={user.phNo} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm2;
```

### **Advantages of this approach:**
✅ Uses a single `useState` hook, making the code cleaner and easier to manage.
✅ Uses the spread operator (`...prev`) to update the state efficiently.
✅ Fewer state updates, leading to better performance.
✅ More scalable and maintainable code.

---
##4-login form-LoginForm.jsx
```jsx
import {useState} from 'react'

function LoginForm() {

   const [userName,setUserName] =useState("");
   const[password,setPassword] =useState("");

   const handleFormSubmit=(e)=>{
         e.preventDefault();

         const formData ={
            // userName:userName,
            // password:password,
            //or --bcz if the value and key are same we can write it once
            userName,
            password
         }
         console.log(formData);
   }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <form onSubmit={handleFormSubmit}  className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">

            <h1 className="text-3xl font-bold text-white text-center">Log IN</h1>
            <p className="text-gray-400 text-center mt-2">
              Enter detail to login
            </p>
    
            <div className="mt-6">
              <label className="block text-gray-300 mb-1">Username</label>
              <input type="text" name="username" value={userName} onChange={(e)=>setUserName(e.target.value)} required autoComplete='off' className="w-full p-3 border rounded-lg bg-gray-700 text-white" />
            </div>
    
            <div className="mt-6">
              <label className="block text-gray-300 mb-1">Password</label>
              <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required autoComplete='off' className="w-full p-3 border rounded-lg bg-gray-700 text-white" />
            </div>
            
    
            <div className="mt-6">
              <button type="submit" className="w-full bg-emerald-500 text-white py-3 rounded-lg text-lg font-semibold">
                Log In
              </button>
            </div>
          </form>
        </div>
      );
}

export default LoginForm

## 3. `App.js` (Rendering the Registration Forms)
```jsx
import Registration from "./components/Registration";
import RegistrationForm2 from "./components/RegistrationForm2";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      {/* <Registration /> */}
      {/* Commented out: Uses multiple state variables (less efficient) */}

      {/* <RegistrationForm2 /> */}
      {/* Uses a single state object (more efficient) */}

      <LoginForm/>
    </div>
  );
}

export default App;


---

## **Comparison: Which Approach is Better?**

| Approach | Multiple `useState` Hooks | Single `useState` Object |
|----------|--------------------------|--------------------------|
| Number of `useState` calls | 5 (One per field) | 1 (Single state object) |
| Code Complexity | Higher (More boilerplate) | Lower (Cleaner code) |
| Performance | Slightly worse (More re-renders) | Better (Fewer re-renders) |
| Maintainability | Harder (More state variables to track) | Easier (State is centralized) |
| Recommended for large forms? | ❌ No | ✅ Yes |

### **Conclusion**
If you have a small form with just one or two fields, using multiple `useState` hooks is fine. However, for scalability, maintainability, and better performance, using a **single `useState` object** is the preferred approach.





[Mayank Nautiyal] 🚀

Feel free to reach out for any questions or improvements! 😊

