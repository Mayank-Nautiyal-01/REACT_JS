import  { memo, useCallback, useState } from 'react'

const Button=memo(({onClick,children})=>{
    console.log(`Rendering button : ${children}`);
    return <button onCLick={onClick}>{children}</button>
})
function UseCallback() {
    const[count,setCount]=useState(0)


    const increment=  useCallback(()=>{
        console.log("increment inside");
        setCount((prev)=>prev+1);
       },[])
  

       const decrement=  useCallback(()=>{
        console.log("decrement inside");
        setCount((prev)=>prev-1);
       },[])


    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseCallback