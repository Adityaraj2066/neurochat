export default function ChatInput({ value, onChange, onSend }) {
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onSend();
    }
  }

  return (
    <div className="chat-input-area">
      <input
        placeholder="Type message..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="send" onClick={onSend}>
        Send
      </button>
    </div>
  );
}
