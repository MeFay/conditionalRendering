import "./App.css";
import UserGreeting from "./UserGreeting.jsx";

//conditional rendering allows to control what gets rendered in the application based on certain conditions(show, hide and change components)

function App() {
  return <>
  <UserGreeting isLoggedIn={true} username="Fay"/>
  </>;
}

export default App;
