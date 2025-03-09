import React, { useState } from 'react';

function ShortCircuit() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to Short Circuit Evaluation
      </h1>

      {isLoggedIn && <p className="text-green-600 font-medium">You are logged in</p>}

      <p className="mt-2 text-lg text-gray-700">
        {user ? `Hello, ${user}` : "You are logged in"}
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setLoggedIn(!isLoggedIn)}
        >
          Toggle Login State
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => setUser("Mayank Nautiyal")}
        >
          Set User
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          onClick={() => setUser("")}
        >
          Clear User
        </button>
      </div>
    </section>
  );
}

export default ShortCircuit;
