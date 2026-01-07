import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchProducts = async () => {
  const { data } = await api.get('/menu');
  return data;
};

export const createOrder = async (orderData) => {
  const { data } = await api.post('/orders', orderData);
  return data;
};

export default api;