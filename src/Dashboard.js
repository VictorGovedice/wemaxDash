import React from 'react';
import './Dashboard.css';  // Estilize conforme necessário

const users = [
  { id: 1, name: 'João Silva', email: 'joao@gmail.com', value: 'R$ 5.000' },
  { id: 2, name: 'Maria Souza', email: 'maria@hotmail.com', value: 'R$ 3.200' },
  { id: 3, name: 'Pedro Oliveira', email: 'pedro@yahoo.com', value: 'R$ 7.500' },
  { id: 4, name: 'Ana Costa', email: 'ana@gmail.com', value: 'R$ 2.300' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">Wemax</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Meus Clientes</li>
            <li>Solicitação Saque</li>
          </ul>
        </nav>
        <button className="logout">Sair</button>
      </aside>

      <main className="content">
        <h1>Lista de Usuários</h1>
        <table className="user-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
