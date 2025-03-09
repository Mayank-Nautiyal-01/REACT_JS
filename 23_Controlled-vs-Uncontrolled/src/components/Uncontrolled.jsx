import React, { useRef } from "react";

function UncontrolledComponent() {
  // useRef is used to directly reference the input field in the DOM
  const nameRef = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents page reload
    alert(`Entered Name: ${nameRef.current.value}`);  // Accesses input value using ref
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>

      {/* Form with input field, value is not controlled by state */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />  {/* Uses ref to access value */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledComponent;
