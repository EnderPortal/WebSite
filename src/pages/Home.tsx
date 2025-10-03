import { useUser } from "../hooks/useUser";

export default function Home() {
  const {user} = useUser();

  return <h1>Salut ! {user?.username}</h1>
}
