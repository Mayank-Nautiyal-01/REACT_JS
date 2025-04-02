import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/ui/Card';


function Movie() {
  const moviesData = useLoaderData();
  console.log("Movies Data:", moviesData); // ✅ Check the API response

  if (!moviesData || !moviesData.Search) {
    return <h2 className="text-center text-red-500 text-xl">No movies found.</h2>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {moviesData.Search.map((curMovie) => (
        <Card key={curMovie.imdbID} curMovie={curMovie} />
      ))}
    </ul>
  );
}

export default Movie;
