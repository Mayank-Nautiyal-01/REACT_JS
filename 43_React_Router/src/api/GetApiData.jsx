import React from 'react'

async function GetApiData() {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
 
}

export default GetApiData