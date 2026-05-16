import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from '../components/chat/ChatHeader';
import ChatInput from '../components/chat/ChatInput';
import MessageList from '../components/chat/MessageList';
import Sidebar from '../components/chat/Sidebar';
import { useAuth } from '../hooks/useAuth';
import {
  deleteChat,
  fetchChatHistory,
  fetchChatTitles,
  streamMessage,
} from '../services/chatService';
import { getRoleFromToken } from '../utils/jwt';
import { removeToken } from '../utils/token';
import '../styles/chat.css';

function createChatId() {
  return Date.now().toString();
}

export default function Chat() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [chatId, setChatId] = useState(createChatId);
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [input, setInput] = useState('');

  const loadChats = useCallback(async () => {
    try {
      const data = await fetchChatTitles();
      setChats(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    loadChats();
  }, [loadChats]);

  function handleNewChat() {
    setChatId(createChatId());
    setMessages([]);
  }

  function handleUpgrade(nav) {
    if (!token) {
      nav('/register');
      return;
    }

    try {
      const role = getRoleFromToken(token);

      if (role === 'PRO') {
        alert('You are already a PRO user 🚀');
        return;
      }

      nav('/upgrade');
    } catch (e) {
      console.log('Token error:', e);
      removeToken();
      logout();
      nav('/register');
    }
  }

  async function handleSelectChat(id) {
    setChatId(id);
    try {
      const history = await fetchChatHistory(id);
      setMessages(
        history.map((msg) => ({
          role: msg.role,
          content: msg.content,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteChat(id) {
    try {
      await deleteChat(id);
      await loadChats();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSendMessage() {
    const msg = input.trim();
    if (!msg) return;

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: msg },
      { role: 'bot', content: '' },
    ]);
    setInput('');

    const result = await streamMessage(chatId, msg, (partial) => {
      setMessages((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (last?.role === 'bot') {
          next[next.length - 1] = { ...last, content: `${partial}▌` };
        }
        return next;
      });
    });

    if (!result.ok) {
      if (result.errorData?.type === 'GUEST') {
        navigate('/register');
        return;
      }
      if (result.errorData?.type === 'PAYMENT') {
        navigate('/upgrade');
        return;
      }
      return;
    }

    setMessages((prev) => {
      const next = [...prev];
      const last = next[next.length - 1];
      if (last?.role === 'bot') {
        next[next.length - 1] = { ...last, content: result.fullText };
      }
      return next;
    });

    await loadChats();
  }

  return (
    <div className="chat-page">
      <Sidebar
        chats={chats}
        onNewChat={handleNewChat}
        onUpgrade={handleUpgrade}
        onSelectChat={handleSelectChat}
        onDeleteChat={handleDeleteChat}
      />
      <div className="chat-container">
        <ChatHeader />
        <MessageList messages={messages} />
        <ChatInput
          value={input}
          onChange={setInput}
          onSend={handleSendMessage}
        />
      </div>
    </div>
  );
}
