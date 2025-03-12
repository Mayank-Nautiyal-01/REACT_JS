import { useState } from "react";

function RegistrationForm2() {
  // Using a single state object to store all form field values
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNo: "",
  });

  // Function to update state dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Updating the state object using spread operator
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user); // Logging user data
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleFormSubmit} className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center">Sign Up</h1>
        <p className="text-gray-400 text-center mt-2">
          Please fill in this form to create an account
        </p>

        {/* Reusing input fields like before but with a single state object */}
        <div className="mt-6">
          <label className="block text-gray-300 mb-1">First Name</label>
          <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} required className="w-full p-3 border rounded-lg bg-gray-700 text-white" />
        </div>

        <div className="mt-4">
          <label className="block text-gray-300 mb-1">Last Name</label>
          <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} required className="w-full p-3 border rounded-lg bg-gray-700 text-white" />
        </div>

        {/* Other input fields are similar */}

        <div className="mt-6">
          <button type="submit" className="w-full bg-emerald-500 text-white py-3 rounded-lg text-lg font-semibold">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm2;
