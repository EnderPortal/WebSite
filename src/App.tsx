import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Home from "./pages/Home";

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

        <main>
          <Routes>
            {/**Register route */}
            <Route path="/register" element={<Register />}></Route>

            {/**Login route */}
            <Route path="/login" element={<Login />}></Route>

            {/**Home router */}
            <Route path="/" element={<Home />}></Route>

            {/**Route par default */}
            {/**TODO : il faudra penser à check si l'utiliser est authentificated ou pas */}

            {/** penser à la route * pour le not found */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
