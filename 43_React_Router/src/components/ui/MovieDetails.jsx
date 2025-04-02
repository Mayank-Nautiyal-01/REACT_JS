import { NavLink, useLoaderData } from 'react-router-dom';

function MovieDetails() {
    const movieData = useLoaderData(); // Get movie data from loader

    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-lg w-full">
                {/* Movie Poster */}
                <div className="w-full h-96 bg-gray-200 flex justify-center items-center">
                    <img 
                        src={movieData.Poster} 
                        alt={movieData.Title} 
                        className="w-auto h-full object-cover rounded-t-xl"
                    />
                </div>

                {/* Movie Details */}
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">{movieData.Title}</h2>
                    <p className="text-gray-600 mt-2">Type: <span className="font-medium">{movieData.Type}</span></p>
                    <p className="text-gray-600 mt-1">Year: <span className="font-medium">{movieData.Year}</span></p>
                    <p className="text-gray-600 mt-1">IMDB Rating: <span className="font-medium">{movieData.imdbRating || 'N/A'}</span></p>

                    <NavLink to="#" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                        Watch Now
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;
