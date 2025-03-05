

 //ques:

 //Derived state:count of users & find average of users




import { useState } from "react";

  
function DerivedState() {
  const [users, setUsers] = useState( [
    {name: 'John', age:24},
    {name: 'bob', age:30},
    {name: 'alice', age:40},
    {name: 'fred', age:23},
  ]);


   const addUser=()=>{
    const newUser={name: 'Emma', age:24};
    setUsers([...users,newUser]); // Updating state
   }

    //Derived State:count of users
    console.log(users);
    const userCount=users.length;

    //Derived State:average age of users
    const averageAge=users.reduce((accum,curElem)=>accum+curElem.age,0)/userCount

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
        <h4>Average Age:{averageAge}</h4>
        <button onClick={addUser}>Add User</button>{/* Button to update state */}
      </div>
    )
  }
  
  export default DerivedState