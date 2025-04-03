import React from 'react';

function Card({movieData}) {
  const{Poster,imdbID}=movieData;
  return (
    <li className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-64 m-4">
      <div className="relative">
        <img 
          src={Poster} 
          alt={imdbID}
          className="w-full h-80 object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <a href="#" className="block text-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600 transition">
              Watch Now
            </button>
          </a>
        </div>
      </div>
    </li>
  );
}

export default Card;
