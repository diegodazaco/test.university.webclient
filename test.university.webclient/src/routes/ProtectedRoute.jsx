import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
    const userRole = localStorage.getItem("rol");
    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/login" />;

    return userRole === role ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;