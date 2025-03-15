import {useState,useEffect} from 'react'

function How_to_fetch() {

    const[apiData,setApiData]=useState([])

    const API="http://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{
        fetch(API).then((res)=>res.json()).then((data)=>{setApiData(data)}).catch((error)=>console.log(error))
    },[])
  return (
    <div>
       <ul>
        data:
        {apiData.map((curData)=>{
            return <li  key={curData.id}> {curData.title} </li>
        })}
       </ul>
    </div>
  )
}

export default How_to_fetch







