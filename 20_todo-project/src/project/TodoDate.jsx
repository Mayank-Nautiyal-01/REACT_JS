import { useState, useEffect } from "react";

function TodoDate() {
  // State to store the current date and time
  const [dateTime, setDateTime] = useState("");

  // useEffect to update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return <h2 className="mt-3 text-lg font-semibold text-gray-800">{dateTime}</h2>;
}

export default TodoDate;
