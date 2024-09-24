import React, { useState } from 'react';
import { changePassword } from './api'; // Importando a função de troca de senha

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const data = await changePassword(currentPassword, newPassword);
      setMessage('Senha alterada com sucesso!');
    } catch (error) {
      setError('Erro ao trocar a senha.');
    }
  };

  return (
    <div>
      <h1>Trocar Senha</h1>
      <form onSubmit={handleChangePassword}>
        <input
          type="password"
          placeholder="Senha Atual"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nova Senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Alterar Senha</button>
      </form>
    </div>
  );
};

export default ChangePassword;
