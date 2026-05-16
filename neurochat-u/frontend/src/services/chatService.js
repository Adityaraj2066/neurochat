import api from './api';
import { getToken } from '../utils/token';

const baseURL = import.meta.env.VITE_API_BASE_URL || '';

function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchChatTitles() {
  const { data } = await api.get('/api/chat/chat-titles');
  return data;
}

export async function fetchChatHistory(chatId) {
  const { data } = await api.get(`/api/chat/history/${chatId}`);
  return data;
}

export async function deleteChat(chatId) {
  await api.delete(`/api/chat/delete/${chatId}`);
}

export async function streamMessage(chatId, message, onChunk) {
  const url = `${baseURL}/api/chat/stream?chatId=${encodeURIComponent(chatId)}&message=${encodeURIComponent(message)}`;

  const res = await fetch(url, { headers: authHeaders() });

  if (!res.ok) {
    const text = await res.text();
    let errorData = null;
    try {
      errorData = JSON.parse(text);
    } catch {
      console.log('Error:', text);
    }
    return { ok: false, errorData, text };
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let fullText = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    fullText += decoder.decode(value);
    onChunk(fullText);
  }

  return { ok: true, fullText };
}
