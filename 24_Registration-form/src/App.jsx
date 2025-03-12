import Registration from "./components/Registration";
import RegistrationForm2 from "./components/RegistrationForm2";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      {/* <Registration /> */}
      {/* Commented out: Uses multiple state variables (less efficient) */}

      {/* <RegistrationForm2 /> */}
      {/* Uses a single state object (more efficient) */}

      <LoginForm/>
    </div>
  );
}

export default App;
