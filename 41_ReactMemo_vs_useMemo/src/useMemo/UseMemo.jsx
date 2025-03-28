
import {  useMemo, useState } from 'react';
import MemoCount from './MemoCount';

function UseMemo() {
    const[count,setCount]=useState(0);

    const myBioData=useMemo(()=>{
        return {
        name:"Mayank",
        age:30,
        }
    },[])
  return (
    <>
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button> 
        </div>
        <MemoCount bioData={myBioData}/>
    </>
  )
}

export default UseMemo