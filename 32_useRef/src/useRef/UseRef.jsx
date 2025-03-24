import  { useRef } from 'react'

function UseRef() {

    //not recommended by react
    // const username=document.getElementById('username')
    // const password=document.getElementById('password')

    //recommanded by react
    const username=useRef(null);
    const password=useRef(null);
    const handleFormSubmit=(e)=>{
      e.preventDefault();
      console.log(username.current.value,password.current.value);
    }
  return (
   <form onSubmit={handleFormSubmit}>
    <input type='text' id='username' ref={username} />
    <input type="text" id='password' ref={password}/>
    <button >Submit</button>
   </form>
  )
}

export default UseRef