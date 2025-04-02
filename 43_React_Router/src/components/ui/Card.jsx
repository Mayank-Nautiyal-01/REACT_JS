import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({ curMovie }) {
  const { Poster, imdbID } = curMovie; // Change imdbId to imdbID

  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        {/* Movie Poster */}
        <img 
          src={Poster} 
          alt={imdbID} 
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Movie Details */}
      <div className="p-4 flex justify-center">
        <NavLink to={`/movie/${imdbID}`}> {/* Change imdbId to imdbID */}
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300">
            Watch Now
          </button>
        </NavLink>
      </div>
    </li>
  );
}
export default Card;