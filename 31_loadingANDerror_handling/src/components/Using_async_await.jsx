import { useState, useEffect } from "react";

function Using_async_await() {
   const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  
    // const fetchPokemon = () => {
    //   fetch(API)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setPokemon(data);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       setError(error);
    //       setLoading(false);
    //     });
    // };
   
    //!using async await

    const fetchPokemon =async() => {
         try{
          const response=await fetch(API);
           const data=await response.json();
           setPokemon(data);
           setLoading(false);
         } catch(error){
            console.log(error);
            setError(error);
            setLoading(false);
         }
    }


    useEffect(() => {
      fetchPokemon();
    }, []);
  
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <h1 className="text-3xl font-bold">Error: {error.message}</h1>
        </div>
      );
    }
  
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 opacity-20 blur-3xl animate-pulse"></div>
  
        <header>
          <h1 className="text-4xl font-bold text-emerald-400 mb-6 relative z-10">
            Let's Catch Pokémon
          </h1>
        </header>
  
        <ul className="relative z-10 w-72">
          <li className="p-6 rounded-xl shadow-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative
                        bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
  
            <figure className="flex justify-center mb-4">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="w-24 h-24 object-contain drop-shadow-md"
              />
            </figure>
            <h1 className="text-2xl font-bold text-emerald-400 mb-2 capitalize">
              {pokemon.name}
            </h1>
            <div className="flex justify-between gap-3 text-sm font-semibold mt-4 text-gray-300">
              <p>
                Height: <span className="text-emerald-300">{pokemon.height}</span>
              </p>
              <p>
                Weight: <span className="text-emerald-300">{pokemon.weight}</span>
              </p>
              <p>
                Speed:
                <span className="text-emerald-300">
                  {pokemon.stats[5].base_stat}
                </span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
}

export default Using_async_await