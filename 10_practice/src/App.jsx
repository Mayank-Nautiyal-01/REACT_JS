
//? Coding Challenge:**  
// Create a React application that demonstrates the use of props by building a simple profile card system. Each profile card should display a user’s name, age, and a personalized greeting message. Additionally, use props.children to allow for flexible content inside each profile card.

//* Challenge Details:**  

//? Create a Main Component: Profile**  
// This component should render multiple ProfileCard components, each with different user data and children elements.  

//? Create a ProfileCard Component:**  
// This component should accept props for the user’s name, age, and a personalized greeting message (as JSX).  
// The component should also use props.children to render additional content inside the card.  

//* Requirements:**  
//? Props Usage:**  
// Pass the user’s name, age, and a personalized greeting message as props to the ProfileCard component.  


import Profile from "./components/Profile"

function App() {
  return (
    <>
    <Profile/>
    </>
  )
}

export default App