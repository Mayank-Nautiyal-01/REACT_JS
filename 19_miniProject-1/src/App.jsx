import { useState } from 'react'

import ToggleComponent from './components/ToggleComponent'

function App() {
  const[darkMode,setDarkMode] =useState(false)
  return (
    <>
      {/* Passing state and function as props */}
       < ToggleComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  )
}

export default App