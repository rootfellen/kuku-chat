import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
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
