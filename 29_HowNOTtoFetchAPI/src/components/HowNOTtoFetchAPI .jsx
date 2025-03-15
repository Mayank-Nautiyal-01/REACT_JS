import {useState} from 'react'

function HowNOTtoFetchAPI () {
 const[apiData,setApiData]=useState([])

    fetch("http://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((data)=>{setApiData(data)}).catch((error)=>console.log(error))
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

export default HowNOTtoFetchAPI 