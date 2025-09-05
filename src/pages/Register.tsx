import { useState, type FormEvent } from "react";
import RegisterForm from "../components/RegisterForm";
import toast from "react-hot-toast";
import { api } from "../utils/api";
import { setToken } from "../utils/auth";

export default function Register({ onLogin }: { onLogin: () => void }) {
  //Object containing information for player registration
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    accepteTerms: false,
  });

  //Send data in server
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    /**
     * Verification of the 2 passwords
     */
    if (formData.password !== formData.confirmPassword) {
      toast.error("Les 2 mots de passe ne correspond pas");
      return;
    }

    /**
     * did the player accept the terms?
     */
    if (!formData.accepteTerms) {
      toast.error("Veuillez accepter les conditions d'utilisations");
      return;
    }

    /**
     * Password length (need to be >=5)
     */
    if (formData.password.length < 5) {
      toast.error("Le mot de passe doit contenir au moins 5 caracètres");
      return;
    }

    /**
     * Pseudo length
     */
    if (formData.username.length < 3 || formData.username.length > 16) {
      toast.error("Votre pseudo doit être compris entre 3 et 16 caractères");
      return;
    }

    try {
      const response = await api.post("/auth/register", {
        mail: formData.email,
        username: formData.username,
        password: formData.password,
      });

      toast.success("Compte créer avec succès !");

      setToken(response.data.access_token);

      onLogin();

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
              Rejoindre EnderPortal
            </span>
          </h1>

          <p className="text-gray-300 font-modern">
            Créez votre compte - projet d'application network
          </p>
        </div>

        {/*Formulaire */}
        <RegisterForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        ></RegisterForm>
      </div>
    </div>
  );
}
