import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register as registerApi } from '../services/authService';
import '../styles/register.css';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function handleRegister() {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      alert('Please fill all fields');
      return;
    }

    try {
      const res = await registerApi(trimmedUsername, trimmedPassword);

      if (res.status === 200) {
        alert('Registered successfully!');
        navigate('/login');
      } else {
        alert('Registration failed!');
      }
    } catch {
      alert('Registration failed!');
    }
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>
        <input
          type="text"
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        <div className="register-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
