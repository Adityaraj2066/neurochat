import api from './api';

export async function login(username, password) {
  const { data } = await api.post('/api/auth/login', { username, password });
  return data;
}

export async function register(username, password) {
  const response = await api.post('/api/auth/register', { username, password });
  return response;
}
