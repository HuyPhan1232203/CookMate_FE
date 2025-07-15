import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AccessDeniedPage from "@/pages/AccessDeniedPage";

export default function ProtectedRoute({ allowedRoles, children }) {
  // Lấy role từ localStorage key 'user'
  let role = "guest";
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role) role = user.role;
  } catch {
    role = "guest";
  }
  const location = useLocation();
  const navigate = useNavigate();
  const hasAccess = allowedRoles.includes(role);

  useEffect(() => {
    if (!hasAccess && location.pathname === "/access-denied") {
      const timer = setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasAccess, location.pathname, navigate]);

  if (!hasAccess) {
    if (location.pathname === "/access-denied") {
      return <AccessDeniedPage />;
    }
    return <Navigate to="/access-denied" replace />;
  }
  return children;
}
