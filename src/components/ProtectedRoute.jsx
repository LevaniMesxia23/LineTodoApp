import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

function ProtectedRoute() {
  const { userId, isLoaded } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return null;
  }
  if (!userId) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
