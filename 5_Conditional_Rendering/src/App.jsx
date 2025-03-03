import React from 'react'

// Example 1: Ternary Operator
//Components Must Start with an Uppercase Letter like:UserGreeting & Greeting
const UserGreeting=({isLoggedIn})=>{
  return (
    <div>
      {isLoggedIn?<h1>Welcome back!</h1>:<h1>Please log in</h1>}
    </div>
  )
}

// Example 2: If-Else in Function
const Greeting=({isLoggedIn})=>{
  if(isLoggedIn){
      return <h1>Welcome back!</h1>
  }
  else{
    return <h1>Please log in</h1>
  }
}


// Example 3: Function Returning JSX
const getButton=(isLoggedIn)=>{
    return isLoggedIn?<button>LogOut</button>:<button>Log In</button>
}


function App() {
  const isLoggedIn = true; 
  return (
    <div>
     {/* ex:1 */}
      <UserGreeting isLoggedIn={isLoggedIn}/>
      {/* ex:2 */}
      <Greeting isLoggedIn={isLoggedIn}/>

      {/* ex:3 */}
      <div>{getButton(isLoggedIn)}</div>
    </div>
  )
}

export default App