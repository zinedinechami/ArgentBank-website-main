import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const isAuthenticated = () => {
  return sessionStorage.getItem("token") != null;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
