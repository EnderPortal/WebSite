import type { FormEvent } from "react";

/**
 * Data present in the form
 */
type RegisterFormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  accepteTerms: boolean;
};

/**
 * Object representing the props
 * for this login form
 */
type RegisterFormProps = {
  formData: RegisterFormData;

  setFormData: (value: RegisterFormData) => void;
  handleSubmit: (e: FormEvent) => void;
};

/**
 * Component to create a registration
 * form for players
 */
export default function RegisterForm({
  formData,
  setFormData,
  handleSubmit,
}: RegisterFormProps) {
  const { email, username, password, confirmPassword, accepteTerms } = formData;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-black/40 backdrop-blur-sm border border-ender-primary/30 rounded-xl p-8 shadow-2xl"
    >
      {/**Email */}
      <div>
        <label className="block set-sm font-medium text-gray-300 mb-2">
          E-mail
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Votre address email"
          className="w-full px-4 py-3 bg-ender-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-ender-primary focus:ring-2 focus:ring-ender-primary/20 transition-all duration-300"
          required
        />
      </div>

      {/**Pseudo */}
      <div>
        <label className="block set-sm font-medium text-gray-300 mb-2">
          Pseudo
        </label>

        <input
          value={username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          placeholder="Votre pseudo Minecraft"
          className="w-full px-4 py-3 bg-ender-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-ender-primary focus:ring-2 focus:ring-ender-primary/20 transition-all duration-300"
          required
        />

        <p className="text-xs text-gray-400 mt-1">
          3-16 caractères, sont attendu
        </p>
      </div>

      {/**Pwd section */}
      <div>
        <label className="block set-sm font-medium text-gray-300 mb-2">
          Mot de passe
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Mot de passe"
          className="w-full px-4 py-3 bg-ender-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-ender-primary focus:ring-2 focus:ring-ender-primary/20 transition-all duration-300"
          required
        />
      </div>

      <div>
        <label className="block set-sm font-medium text-gray-300 mb-2">
          Confirmer le mot de passe
        </label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          placeholder="Mot de passe"
          className="w-full px-4 py-3 bg-ender-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-ender-primary focus:ring-2 focus:ring-ender-primary/20 transition-all duration-300"
          required
        />
      </div>

      {/**Accept terms */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={accepteTerms}
          onChange={(e) =>
            setFormData({ ...formData, accepteTerms: e.target.checked })
          }
          className="mt-1 w-4 h-4 text-ender-primary bg-ender-dark border-gray-600 rounded focus:ring-ender-primary focus:ring-2"
          required
        />

        <label htmlFor="terms" className="text-sm text-gray-300">
          J'accepte les{" "}
          <a
            href="#"
            className="text-ender-primary hover:text-ender-glow transition-colors"
          >
            conditions d'utilisation{" "}
          </a>
          et la{" "}
          <a
            href="#"
            className="text-ender-primary hover:text-ender-glow transition-colors"
          >
            politique de confidentialité
          </a>
        </label>
      </div>

      {/**Footer forms */}
      <button className="w-full bg-gradient-to-r from-ender-primary to-ender-accent py-3 px-6 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-ender-primary/30 transition-all duration-300 animate-glow disabled:opacity-50 disabled:cursor-not-allowed">
        Créer mon compte
      </button>

      <div className="text-center pt-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          Déjà un compte ?{" "}
          <a
            href=""
            className="text-ender-primary hover:text-ender-glow transition-colors font-medium"
          >
            Se connecter
          </a>
        </p>
      </div>
    </form>
  );
}
