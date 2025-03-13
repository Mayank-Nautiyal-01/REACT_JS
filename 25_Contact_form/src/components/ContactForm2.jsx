import React, { useState } from "react";

function ContactForm() {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state dynamically
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // Reset the state correctly
    setData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-white text-center">Contact Form</h1>
        <p className="text-gray-400 text-center mt-2">We'd love to hear from you!</p>

        <div className="mt-6">
          <label className="block text-gray-300 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleInputChange}
            required
            autoComplete="off"
            className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div className="mt-6">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            required
            autoComplete="off"
            className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div className="mt-6">
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
