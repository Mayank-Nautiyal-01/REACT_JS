import React, { useState } from "react";

function ControlledComponent() {
  // useState is used to store and control the input value
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Controlled Component</h2>
      
      {/* Input field whose value is controlled by React state */}
      <input 
        type="text" 
        value={name}  // Input value comes from state
        onChange={(e) => setName(e.target.value)}  // Updates state on every change
      />
      
      {/* Displays the current input value */}
      <p>Typed Name: {name}</p>
    </div>
  );
}

export default ControlledComponent;
