import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [form, setForm] = useState({ nombre: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/security/api/estudiantes/create", form);
        alert("Registro exitoso");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro de Estudiante</h2>
            <input name="nombre" placeholder="Nombre" onChange={handleChange} />
            <input name="email" type="email" placeholder="Correo" onChange={handleChange} />
            <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
            <button type="submit">Registrarse</button>
        </form>
    );
}
