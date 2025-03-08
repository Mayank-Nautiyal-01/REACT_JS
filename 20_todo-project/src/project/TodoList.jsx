import { FaCheck } from "react-icons/fa"; // Check icon
import { MdDeleteForever } from "react-icons/md"; // Delete icon

function TodoList({ data, checked,onHandleDeleteTodo,onHandleCheckedTodo }) {
  return (
    <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
      {/* Task Text */}
      <span className={`text-gray-800 font-medium ${
           checked ? "line-through text-gray-400  " : ""}`}>{data}</span>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        {/* Complete Task Button (Currently No Functionality) */}
        <button onClick={()=>onHandleCheckedTodo(data)}
          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          <FaCheck size={18} />
        </button>

        {/* Delete Task Button */}
        <button
          onClick={() => onHandleDeleteTodo(data)}
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          <MdDeleteForever size={20} />
        </button>
      </div>
    </li>
  );
}

export default TodoList;
