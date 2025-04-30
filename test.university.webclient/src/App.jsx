import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/autenticacion/Login";
import Register from "./pages/autenticacion/Register";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/administrador/Dashboard";
import Programas from "./pages/administrador/Programas";
import Materias from "./pages/administrador/Materias";
import Profesores from "./pages/administrador/Profesor";
import StudentDashboard from "./pages/estudiante/Dashboard";
import MateriasEstudiante from "./pages/estudiante/Materias";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
    return (
        <Routes>
            {/* Redirección desde la raíz */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas protegidas */}
            <Route
                path="/administrador"
                element={
                    <ProtectedRoute role="Administrador">
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<AdminDashboard />} />
                <Route path="programas" element={<Programas />} />
                <Route path="materias" element={<Materias />} />
                <Route path="profesores" element={<Profesores />} />
            </Route>

            <Route
                path="/estudiante"
                element={
                    <ProtectedRoute role="Estudiante">
                        <StudentDashboard />
                    </ProtectedRoute>
                }
            >
                <Route path="materias" element={<MateriasEstudiante />} />
            </Route>

            {/* Si no encuentra ruta válida, redirige al login */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default App;
