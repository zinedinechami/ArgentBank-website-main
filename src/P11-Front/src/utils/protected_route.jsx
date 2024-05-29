import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return sessionStorage.getItem("token") != null;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
