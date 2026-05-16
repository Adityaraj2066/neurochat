import { useEffect, useRef } from 'react';

export default function MessageList({ messages }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={containerRef} className="chat-messages">
      {messages.map((msg, index) => (
        <div key={index} className={`msg ${msg.role}`}>
          {msg.content}
        </div>
      ))}
    </div>
  );
}
