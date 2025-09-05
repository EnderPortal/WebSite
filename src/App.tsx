import { BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ender-dark bg-minecraft-texture">
        {/**Feedback for clients */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1c1c1c",
              color: "#ffffff",
              border: "1px solid #7b5cff",
            },
          }}
        />

        <Register />
      </div>
    </Router>
  );
}

export default App;
