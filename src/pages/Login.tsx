import { useState, type FormEvent } from "react";
import LoginForm from "../components/LoginForm";
import { api } from "../utils/api";
import toast from "react-hot-toast";
import { setToken } from "../utils/auth";

export default function App() {
  //username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //When client submit form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        username: username,
        password: password,
      });

      toast.success("Connexion effectué avec succèss !");

      setToken(response.data.access_token);

      console.log(response);
    } catch (error: any) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Erreur lors de l'inscription"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ender-darker via-minecraft-obsidian to-minecraft-endstone p-4">
      <div className="absolute inset-0 bg-minecraft-texture opacity-30"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-pixel font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-ender-primary to-ender-glow bg-clip-text text-transparent">
              EnderPortal
            </span>
          </h1>

          <p className="text-gray-300 font-modern">
            Projet d'application network
          </p>
        </div>

        {/*Formulaire */}
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        ></LoginForm>
      </div>
    </div>
  );
}
