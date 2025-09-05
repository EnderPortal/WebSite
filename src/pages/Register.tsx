import { useState, type FormEvent } from "react";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  //Object containing information for player registration
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    accepteTerms: false,
  });

  //Send data in server
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    /**
     * Verification of the 2 passwords
     */
    if (formData.password !== formData.confirmPassword) {
      alert("Les 2 mots de passe ne correspond pas");
      return;
    }

    /**
     * did the player accept the terms?
     */
    if (!formData.accepteTerms) {
      alert("Veuillez accepter les conditions d'utilisations");
      return;
    }

    /**
     * Password length (need to be >=5)
     */
    if (formData.password.length < 5) {
      alert("Le mot de passe doit contenir au moins 5 caracètres");
      return;
    }

    /**
     * Pseudo length
     */
    if (formData.username.length < 3 || formData.username.length > 16) {
      alert("Votre pseudo doit être compris entre 3 et 16 caractères");
      return;
    }

    alert("OK GG !");
    console.log(formData);
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
