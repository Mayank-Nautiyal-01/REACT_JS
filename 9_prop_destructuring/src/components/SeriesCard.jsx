import SeriesData from '../api/SeriesData.json'
import Series from './Series'
function SeriesCard() {
  return (
      <ul>
       {SeriesData.map((curElem) => (
  <Series key={curElem.id} curElem={curElem} />
))}

      </ul>
  )
}

export default SeriesCard