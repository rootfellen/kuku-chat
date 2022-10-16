import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
