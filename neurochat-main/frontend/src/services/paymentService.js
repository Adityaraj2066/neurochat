import api from './api';

export async function createOrder() {
  const { data } = await api.post('/api/payment/create-order');
  return data;
}

export async function verifyPayment(response) {
  if (response) {
    const { data } = await api.post('/api/payment/verify-payment', response, {
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  }

  const { data } = await api.post('/api/payment/verify-payment');
  return data;
}
