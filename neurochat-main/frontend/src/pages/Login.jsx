import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import '../styles/login.css';

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function handleLogin() {
    try {
      const data = await loginApi(username, password);

      if (!data.token) {
        alert('❌ Invalid Credentials');
        return;
      }

      setToken(data.token);
      navigate('/chat');
    } catch (err) {
      alert('Server error');
      console.log(err);
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
