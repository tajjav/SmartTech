import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Paper } from '@mui/material';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { theme } = useTheme(); 

  // Function to handle sending a message
  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), text: input, isUser: true };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  // UseEffect for simulating real-time mock responses
  useEffect(() => {
    if (messages.length && messages[messages.length - 1].isUser) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), text: "This is a mock response.", isUser: false },
        ]);
      }, 2000); // Simulate a delay of 2 seconds for the mock response

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }
  }, [messages]);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {messages.map((message) => (
          <div key={message.id} style={{ textAlign: message.isUser ? 'right' : 'left' }}>
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}