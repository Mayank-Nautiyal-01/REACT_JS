

//ques
//you have to start by looping through an object to show names and ages ex:name-age yrs old.Then use the useState hook to manage state and achieve the same result,also  add a button to add a new user dynamically using setState later this.


import DerivedState from "./assets/components/hooks/DerivedState"
// import State from "./assets/components/hooks/State"
function App() {
  return (
    <div>
      {/* <State/> */}
      <DerivedState/>
    </div>
  )
}

export default App