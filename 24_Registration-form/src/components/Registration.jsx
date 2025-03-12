import { useState } from "react";

function Registration() {
  // Defining state variables separately for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phNo, setPhNo] = useState("");

  // Function to handle input changes dynamically using switch-case
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phNo":
        setPhNo(value);
        break;
      default:
        break;
    }
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phNo,
    };
    console.log(formData); // Logging the form data
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleFormSubmit} className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center">Sign Up</h1>
        <p className="text-gray-400 text-center mt-2">
          Please fill in this form to create an account
        </p>

        {/* Input field for First Name */}
        <div className="mt-6">
          <label className="block text-gray-300 mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
            value={firstName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Input field for Last Name */}
        <div className="mt-4">
          <label className="block text-gray-300 mb-1">Last name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            required
            value={lastName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Input field for Email */}
        <div className="mt-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Input field for Password */}
        <div className="mt-4">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Input field for Phone Number */}
        <div className="mt-4">
          <label className="block text-gray-300 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phNo"
            placeholder="Enter your phone no"
            required
            value={phNo}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Submit button */}
        <div className="mt-6">
          <button type="submit" className="w-full bg-emerald-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition duration-200">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
