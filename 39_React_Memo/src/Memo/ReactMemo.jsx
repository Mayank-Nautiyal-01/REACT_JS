
import { useState } from 'react';
import MemoCount from './MemoCount';

function ReactMemo() {
    const[count,setCount]=useState(0);
  return (
    <>
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button> 
        </div>
        <MemoCount/>
    </>
  )
}

export default ReactMemo