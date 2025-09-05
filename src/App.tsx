import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ender-dark bg-minecraft-texture">
        <Login />
      </div>
    </Router>
  );
}

export default App;
