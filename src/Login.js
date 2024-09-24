import React, { useState } from 'react';
import './Login.css';
import { login, forgotPassword } from './api'; // Importando a função de login e de esquecimento de senha da API

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false); // Controla se o usuário está no modo "esqueceu a senha"
  const [message, setMessage] = useState(null); // Exibe uma mensagem de sucesso ou erro

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Limpa qualquer erro anterior
    setMessage(null);

    try {
      if (forgotPasswordMode) {
        // Se estiver no modo "esqueceu a senha", chama a função para enviar o email de recuperação
        const data = await forgotPassword(email);
        setMessage("Email enviado com sucesso!");
      } else {
        // Aqui você chama a função de login que faz a requisição para o back-end
        const data = await login(email, password);
        onLogin(data.token);
      }
    } catch (error) {
      setError('Credenciais inválidas ou erro no servidor.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>{forgotPasswordMode ? 'Recuperar Senha' : 'Bem-vindo!'}</h1>
        <p>{forgotPasswordMode ? 'Insira seu email para recuperar a senha' : 'Insira seus dados de acesso para entrar'}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!forgotPasswordMode && (
            <input
              type="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe erros, se houver */}
          {message && <p style={{ color: 'green' }}>{message}</p>} {/* Exibe mensagem de sucesso */}
          <div className="forgot-password">
            {!forgotPasswordMode && (
              <a href="#" onClick={() => setForgotPasswordMode(true)}>
                Esqueceu a senha?
              </a>
            )}
          </div>
          <button type="submit">{forgotPasswordMode ? 'Enviar Email' : 'Entrar'}</button>
          {forgotPasswordMode && (
            <a href="#" onClick={() => setForgotPasswordMode(false)}>
              Voltar para o Login
            </a>
          )}
        </form>
      </div>
      <div className="login-image">
        <img src="https://via.placeholder.com/500" alt="Logo" />
        <h2>Processe pagamentos conosco!</h2>
      </div>
    </div>
  );
};

export default Login;
