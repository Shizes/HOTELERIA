import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="input-group">
        <label htmlFor="email">Correo/Celular</label>
        <input
          type="text"
          id="email"
          placeholder="Escribe tu correo/celular"
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Escribe tu contraseña"
          className="input-field"
        />
        <a href="#" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      <button type="submit" className="submit-button">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
