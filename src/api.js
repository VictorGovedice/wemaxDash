import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-admin.wemaxpay.com.br', // Substitua pelo URL do back-end
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para efetuar login
export const login = async (email, password) => {
  try {
    const response = await api.post('/account/login', { email, password });
    return response.data; // Retorna o token e outros dados necessários
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro na API');
  }
};

// Função para alterar senha
export const changePassword = async (current_password, new_password, token) => {
  try {
    const response = await api.post(
      '/account/changePassword',
      { current_password, new_password },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro na API');
  }
};

// Função para registrar um usuário
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/account/register', userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro na API');
  }
};

// Função para buscar taxas
export const getTaxes = async (token) => {
  try {
    const response = await api.get('/taxes', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro na API');
  }
};

// Função para atualizar taxas
export const updateTaxes = async (taxData, token) => {
  try {
    const response = await api.post('/taxes/update-account-taxes', taxData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro na API');
  }
};

// Função para recuperação de senha (esqueceu a senha)
export const forgotPassword = async (email) => {
  try {
    const response = await api.post('/account/forgot-password', { email });
    return response.data; // Sucesso na solicitação de recuperação de senha
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro na API');
  }
};
