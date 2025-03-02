

function App() {
  return (
    <div>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
    </div>
  )
}

//its a card which we can use mutliple time its just a basic we didnt use it with dynamic (different)values.
const MovieCard=()=>{
  return(
    <div>
      <div>
        <img src="dw.jpg" width="20%" height="20%" />
      </div>
      <h1>Name:DeadPool&Wolverine</h1>
      <p>
      Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.
      </p>
    </div>
  )
}

export default App