import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function ChatHeader() {
  const { isAuthenticated, logout } = useAuth();

  function handleLogout() {
    logout();
    window.location.reload();
  }

  return (
    <div className="chat-header">
      <div className="chat-header-title">NeuroChat</div>
      <a
        href="https://github.com/Adityaraj2066"
        target="_blank"
        rel="noreferrer"
        className="chat-github-link"
      >
        GitHub
      </a>
      <div className="chat-auth-buttons">
        {isAuthenticated ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
            <Link to="/register">
              <button type="button">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
