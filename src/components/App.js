import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(newUser) {
    setUser(newUser);
  }

  // if the user is not logged in, show the login form
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // otherwise, show them the rest of the app
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
