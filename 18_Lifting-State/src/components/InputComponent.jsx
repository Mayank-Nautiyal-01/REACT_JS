

function InputComponent({setName}) {
  return (
    <div>
        <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default InputComponent