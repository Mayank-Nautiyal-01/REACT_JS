function Series({ curElem }) {
    // we can further destructure curElem to make the code cleaner and avoid repeating curElem multiple times
    const { img_url, name, rating, description, cast,genre, watch_url } = curElem;
  
    return (
      <li>
        <div>
          <img src={img_url} alt="img" width="40%" height="40%" />
        </div>
  
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Cast: {cast.join(", ")}</p>
        <p>Genre:{genre.join(",")}</p>
  
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </li>
    );
  }
  
  export default Series;
  