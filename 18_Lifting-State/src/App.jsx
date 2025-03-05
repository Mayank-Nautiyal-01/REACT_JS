import { useState } from 'react'
import InputComponent from './components/InputComponent';
import DisplayComponent from './components/DisplayComponent';





function App() {

  const [name, setName] = useState("");

  return (
    <>
      <h1>Lifting State up Example</h1>
      <InputComponent  setName={setName}/>
      <DisplayComponent name={name} />
    </>
  )
}

export default App