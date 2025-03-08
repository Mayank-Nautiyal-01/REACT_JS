import { useState } from "react";
import TodoForm from "./TodoForm"; // Import form component
import TodoList from "./TodoList"; // Import list component
import TodoDate from "./TodoDate"; // Import date component
import {getLocalStorageTodoData,setLocalStorageTodoData} from "./TodoLocalStroage";


function Todo() {
  // State to store the list of tasks
  const [task, setTask] = useState(()=>getLocalStorageTodoData());

  // Function to add a new task
  const handleFormSubmit = (inputValue) => {
    const {id,content,checked}= inputValue;
    const ifTodoContentMatched=task.find(
      (curTask)=>curTask.content===content
    )// Prevent empty or duplicate tasks

    if(ifTodoContentMatched) return;

    setTask((prev) => [...prev,{id,content,checked}]); // Add new task to the list
  };

  // Function to delete a specific task
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

// Function to checked a specific task
 const handleCheckedTodo =(value)=>{
     const updatedTask=task.map((curTask)=>{
      if(curTask.content ===value) {
        return{...curTask,checked:!curTask.checked}
      }
      else{
        return curTask
       }
      });  
    setTask(updatedTask);

 }


  // Function to clear all tasks
  const handleClearAll = () => {
    setTask([]);
  };

  //add data to localStorage

  setLocalStorageTodoData(task)

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-10 bg-gray-100">
      {/* Header Section */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Todo List</h1>
        <TodoDate /> {/* Displays current date and time */}
      </header>

      {/* Todo Input Form */}
      <TodoForm onAddTodo={handleFormSubmit} />

      {/* Task List */}
      <section className="w-full max-w-md mt-6">
        <ul className="space-y-4">
          {task.map((curTask) => (
            <TodoList
              key={curTask.id} // Unique key for each list item
              data={curTask.content}

              checked={curTask.checked}
              onHandleDeleteTodo={handleDeleteTodo} // Delete function passed as prop
              onHandleCheckedTodo={handleCheckedTodo} // Checked function passed as prop
            />
          ))}
        </ul>
      </section>

      {/* Clear All Button - Only shows if there are tasks */}
      {task.length > 0 && (
        <section>
          <button
            onClick={handleClearAll}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 mt-5"
          >
            Clear All
          </button>
        </section>
      )}
    </section>
  );
}

export default Todo;