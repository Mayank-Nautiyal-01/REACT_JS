import React from 'react'

function App() {
  const user={name:"mayank",age:24};
  return (
    <div>
      <Parent user={user}/>
       {/* Passing 'user' prop to Parent */}
    </div>
  )
}

const Parent =({user})=>{
  return <Child user={user}/>
   // Passing 'user' prop to Child
}

const Child=({user})=>{
  return <GrandChild user={user}/>
   // Passing 'user' prop to GrandChild
}

const GrandChild=({user})=>{
  return <h1>Hello, {user.name}! You are {user.age} years old.</h1>
  // GrandChild needs the 'user' prop
}

export default App