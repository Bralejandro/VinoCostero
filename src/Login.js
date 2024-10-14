// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Asegúrate de que este archivo CSS exista y esté en la misma carpeta

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateForm = (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Por favor, ingrese su correo electrónico.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (!password) {
            setError('Por favor, ingrese su contraseña.');
            return;
        }

        alert('Formulario enviado correctamente');
        // Aquí puedes agregar la lógica para autenticar al usuario
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={validateForm}>
                    <div className="input-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="login-btn">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
