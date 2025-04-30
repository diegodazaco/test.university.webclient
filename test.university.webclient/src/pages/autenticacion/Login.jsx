import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5250/security/api/autenticacion/login", {
                email,
                password,
            });

            const { token, role } = response.data;

            // Guardar token y rol en localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            // Redirigir según rol
            if (role === "Administrador") {
                navigate("/administrador");
            } else if (role === "Estudiante") {
                navigate("/estudiante");
            } else {
                alert("Rol no permitido");
            }

        } catch (error) {
            console.error("Error en login:", error);
            alert("Credenciales inválidas o error de red.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Iniciar sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Correo</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    </form>
                    <div className="text-center mt-3">
                        <a href="/register">¿No tienes cuenta? Registrarse</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
