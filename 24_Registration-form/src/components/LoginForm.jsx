import {useState} from 'react'

function LoginForm() {

   const [userName,setUserName] =useState("");
   const[password,setPassword] =useState("");

   const handleFormSubmit=(e)=>{
         e.preventDefault();

         const formData ={
            // userName:userName,
            // password:password,
            //or --bcz if the value and key are same we can write it once
            userName,
            password
         }
         console.log(formData);
   }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <form onSubmit={handleFormSubmit}  className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">

            <h1 className="text-3xl font-bold text-white text-center">Log IN</h1>
            <p className="text-gray-400 text-center mt-2">
              Enter detail to login
            </p>
    
            <div className="mt-6">
              <label className="block text-gray-300 mb-1">Username</label>
              <input type="text" name="username" value={userName} onChange={(e)=>setUserName(e.target.value)} required autoComplete='off' className="w-full p-3 border rounded-lg bg-gray-700 text-white" />
            </div>
    
            <div className="mt-6">
              <label className="block text-gray-300 mb-1">Password</label>
              <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required autoComplete='off' className="w-full p-3 border rounded-lg bg-gray-700 text-white" />
            </div>
            
    
            <div className="mt-6">
              <button type="submit" className="w-full bg-emerald-500 text-white py-3 rounded-lg text-lg font-semibold">
                Log In
              </button>
            </div>
          </form>
        </div>
      );
}

export default LoginForm