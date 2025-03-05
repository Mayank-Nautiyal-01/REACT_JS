import { useState } from "react";

  
  function State() {

  const [users, setUsers] = useState( [
    {name: 'John', age:24},
    {name: 'bob', age:30},
    {name: 'alice', age:40},
    {name: 'fred', age:23},
  ]);


   // Function to add a new user dynamically

   const addUser=()=>{
    const newUser={name: 'Emma', age:24};
    setUsers([...users,newUser]); // Updating state
   }

    return (
      <div>
        <h1>User List</h1>
        <ul>
            {users.map((curElem,index)=>{
                    return (
                        <li key={index}>
                        {curElem.name} - {curElem.age} yrs old  
                        </li>
                    )
                })}
        </ul>
        <button onClick={addUser}>Add User</button>{/* Button to update state */}
      </div>
    )
  }
  
  export default State