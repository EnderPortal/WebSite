import { useUser } from "../hooks/useUser";

export default function Home() {
  const {user} = useUser();

  return (
    <div className="text-white">
      {
        user ? (
          <h1>Bonjour ! {user.username}</h1>
        ) 
        :
        (
          <h1>Chargement...</h1>
        )
      }
    </div>
  )
}
