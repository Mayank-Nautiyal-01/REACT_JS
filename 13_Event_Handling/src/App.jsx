

// function App() {

//   function handleClick(){
//     alert("Button clicked")
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Click Me</button>
 
//    {/* using arrow fun */}
//       <button onClick={()=>handleClick()}>ClickMe2</button>
//     </>
//   )
// }

// export default App


// !SyntheticBaseEvent
function App() {

  function handleClick(event){
    console.log(event);// Logs SyntheticBaseEvent
    console.log(event.type);//"click"
    console.log(event.target);//The clicked button element
  }

   const handleWelcomeUser=(user)=>{
    console.log(`welcome dear ${user}`);
   }
  return (
    <>
      <button onClick={handleClick}>Click Me</button>

      {/* Using Events with Arrow Functions or we can say Using Inline Arrow Function in JSX*/}
      <button onClick={()=>alert("button 2 clicked!!!")}>Click me 2</button>

      {/* passing argument to event handlers */}
      {/* note:always use arrow fun when u want to pass an argument */}
      <button onClick={()=>handleWelcomeUser("Mayank")}>ClickMe3</button>
    </>
  )
}

export default App

