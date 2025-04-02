import React from 'react';
import { useNavigate, NavLink, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  const navigate =useNavigate();

  const handleGoBack=()=>{
    navigate(-1);
  }

  if (error.status === 404) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-md text-center">
          <figure>
            <img 
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" 
              alt="404 page" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </figure>
          <div className="mt-6">
            <p className="text-xl font-semibold">
              The page you were looking for could not be found
            </p>
            <p className="text-gray-600 mt-2">
              ...Back to previous page
            </p>
          </div>
        </div>

        {/* Styled NavLink Button */}
        <NavLink 
          to="/" 
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Go Back To HomePage
        </NavLink>
        <button onClick={handleGoBack} className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
           GO Back
        </button>
      </section>
    );
  }

  return null; // Return null for other errors or if no error exists
}

export default ErrorPage;
