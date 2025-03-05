

function ToggleComponent({darkMode,setDarkMode}) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ?"bg-gray-900 text-white":"bg-white text-black"}`}>
        <h1 className={`text-3xl font-bold mb-5`}>Dark Mode Toggle</h1>
        {/* <button className={`px-6 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${darkMode?"bg-white text-black hover:bg-gray-300":"bg-black text-white hover:bg-gray-800"}`} onClick={()=>setDarkMode(!darkMode)}>{darkMode?"Light Mode":"dark Mode"}</button> */}

         {/* by making Toggle Button */}
         <div 
         onClick={() => setDarkMode(!darkMode)}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
            
            >

            <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition duration-300 ${
            darkMode ? "translate-x-8" : "translate-x-0"
          }`}></div>
         </div>
    </div>
  )
}

export default ToggleComponent