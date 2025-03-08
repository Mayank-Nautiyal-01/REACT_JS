import { useState } from "react";

function TodoForm({ onAddTodo }) {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (value) => {
    setInputValue({id:value,content:value,checked:false});
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    onAddTodo(inputValue); // Add task to the list
    setInputValue({id:"",content:"",checked:false}); // Clear input field after adding task
  };

  return (
    <section>
      <form className="flex space-x-2" onSubmit={handleFormSubmit}>
        {/* Input Field */}
        <input
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter a task..."
          autoComplete="off"
          value={inputValue.content}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        
        {/* Add Task Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TodoForm;
