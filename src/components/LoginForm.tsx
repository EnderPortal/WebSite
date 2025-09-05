import type { FormEvent } from "react";

/**
 * Object representing the props
 * for this login form
 */
type LoginFormProps = {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleSubmit: (e: FormEvent) => void;
};

export default function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
  handleSubmit,
}: LoginFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-black/40 backdrop-blur-sm border border-ender-primary/30 rounded-xl p-8 shadow-2xl"
    >
      <div>
        <label className="block set-sm font-medium text-gray-300 mb-2">
          Pseudo
        </label>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Votre pseudo Minecraft"
          className="w-full px-4 py-3 bg-ender-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-ender-primary focus:ring-2 focus:ring-ender-primary/20 transition-all duration-300"
        />
      </div>

      <div>
        <label className="block set-sm font-medium text-gray-300 mb-2">
          Mot de passe
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full px-4 py-3 bg-ender-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-ender-primary focus:ring-2 focus:ring-ender-primary/20 transition-all duration-300"
        />
      </div>

      <button className="w-full bg-gradient-to-r from-ender-primary to-ender-accent py-3 px-6 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-ender-primary/30 transition-all duration-300 animate-glow disabled:opacity-50 disabled:cursor-not-allowed">
        Connexion
      </button>

      <div className="text-center pt-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          Pas encore de compte ?{" "}
          <a
            href=""
            className="text-ender-primary hover:text-ender-glow transition-colors font-medium"
          >
            S'inscrire
          </a>
        </p>
      </div>
    </form>
  );
}
