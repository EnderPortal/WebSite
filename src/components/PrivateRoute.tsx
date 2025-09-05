import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export function PrivateRoute({ children }: any) {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
