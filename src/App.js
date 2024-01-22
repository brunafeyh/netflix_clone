import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';

const App = () => {
  const validateForm = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^\+?[0-9]{10,13}$/;

    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
    } else if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      alert("Por favor, digite um email ou número de telefone válido.");
    } else {
      alert("Formulário válido. Agora você pode fazer o que quiser com os dados.");
      // Perform further actions or submit the form to the server
    }
  };

  return (
    <div className="container">
     <img src={logo} className="logo" alt="Netflix logo" />
      <div className="form-wrapper">
        <div className="form-title">Entrar</div>
        <form id="form" onSubmit={validateForm}>
          <div className="form-control">
            <input type="text" id="email" required />
            <label htmlFor="email">Email ou número de telefone</label>
          </div>
          <div className="form-control">
            <input type="password" id="password" required />
            <label htmlFor="password">Senha</label>
          </div>
          <button type="submit" className="form-button">Entrar</button>
          <div className="form-help">
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Lembre-se de mim</label>
            </div>
            <a href="#">Precisa de ajuda?</a>
          </div>
        </form>
        <div className="form-footer">
          Novo por aqui? <a href="#">Assine agora.</a>
        </div>
        <div className="form-small">
          Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a>
        </div>
      </div>
          <div style={{ textAlign: 'center', marginTop: '60px', color: 'gray', fontSize: '12px' }}>
        ©2023 por Bruna Feyh.
      </div>
    </div>
  );
};

export default App;
