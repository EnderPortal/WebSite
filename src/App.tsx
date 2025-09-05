import { BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ender-dark bg-minecraft-texture">
        <Register />
      </div>
    </Router>
  );
}

export default App;
