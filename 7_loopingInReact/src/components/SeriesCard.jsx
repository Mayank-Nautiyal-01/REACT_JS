import seriesData from '../api/seriesData.json'
function SeriesCard() {
  return (
      <ul>
        {seriesData.map((curElem)=>{
            return (
                <li key={curElem.id}>
                  <div>
                    <img src={curElem.img_url} alt="img" width="40%" height="40%"
                    />
                  </div>

                  <h2>Name:{curElem.name}</h2>

                  <h3>Rating:{curElem.rating}</h3>

                  <p>Summary:{curElem.description}</p>

                  <p>Genre:{curElem.cast}</p>

                  <a href={curElem.watch_url} target="_blank">
                    <button>Watch Now</button>
                  </a>
                </li>
            )
        })}
      </ul>
  )
}

export default SeriesCard