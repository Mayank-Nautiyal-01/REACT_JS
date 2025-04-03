import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Card from '../components/ui/Card';
import GetMovies from '../services/getMovies';

function Movie() {
    const [data, setData] = useState([]);
    //1st way
    // const API = "http://www.omdbapi.com/?s=Avengers&apikey=176584d2";

    const getMovieData = async () => {
        try {
            //1st way
            // const res = await axios.get(API);
            //2nd way
            const res=await GetMovies()
            setData(res.data.Search);
        } catch (error) {
            console.log("Error message:",error.message);
            console.log("Error status:",error.response.status);
            console.log("Error data:",error.response.data);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <ul className="flex flex-wrap justify-center gap-4 p-4">
            {data.map((curElem) => (
                <Card key={curElem.imdbID} movieData={curElem} />
            ))}
        </ul>
    );
}

export default Movie;

