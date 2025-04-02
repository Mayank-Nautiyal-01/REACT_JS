async function GetMovieDetails({ params }) {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?i=${params.movieId}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        
        if (data.Response === "False") {
            throw new Error(data.Error); // Handle API errors (e.g., "Movie not found")
        }

        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
}

export default GetMovieDetails;
