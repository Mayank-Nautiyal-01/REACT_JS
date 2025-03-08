const todosKey = "reactTodo";

// ✅ Get data from localStorage
export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todosKey);
  return rawTodos ? JSON.parse(rawTodos) : [];
};

// ✅ Save data to localStorage
export const setLocalStorageTodoData = (task) => {
  localStorage.setItem(todosKey, JSON.stringify(task));
};
