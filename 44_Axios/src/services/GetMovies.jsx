import axios from 'axios'

const api=axios.create({
     baseURL: "http://www.omdbapi.com/"
})
function GetMovies() {
  return api.get("?s=Avengers&apikey=176584d2")
}

export default GetMovies