import React, { useState } from "react";

function ContactForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
          // username: username,
        // email: email,
        // message: message,
        //or
      username,
      email,
      message,
    };
    console.log(formData);
    setUserName("");
    setEmail("");
    setMessage("");
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
            value={username}
            onChange={(e) => setUserName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
            className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div className="mt-6">
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
