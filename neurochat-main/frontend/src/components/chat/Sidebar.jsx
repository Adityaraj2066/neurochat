import { useNavigate } from 'react-router-dom';

export default function Sidebar({ chats, onNewChat, onUpgrade, onSelectChat, onDeleteChat }) {
  const navigate = useNavigate();

  function handleUpgrade() {
    onUpgrade(navigate);
  }

  return (
    <div className="chat-sidebar">
      <button type="button" onClick={onNewChat}>
        + New Chat
      </button>
      <button type="button" onClick={handleUpgrade}>
        Upgrade
      </button>
      <div id="chatList" className="chat-list">
        {chats.map((chat) => (
          <div key={chat.chatId} className="chat-wrapper">
            <div className="chat-item" onClick={() => onSelectChat(chat.chatId)}>
              {chat.title ? chat.title.substring(0, 25) : 'New Chat'}
            </div>
            <span
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteChat(chat.chatId);
              }}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
