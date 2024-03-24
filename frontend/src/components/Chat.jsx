import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { theme } = useTheme();

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), text: input, isUser: true };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].isUser) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), text: "This is a mock response.", isUser: false },
        ]);
      }, 2000); // Simulate a delay for the mock response
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <Paper elevation={5} sx={{
      position: 'fixed',
      bottom: 20,
      right: 16,
      width: 350, // Adjusted width for better visibility
      maxHeight: '80vh', // 80% of the viewport height
      overflow: 'auto',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      zIndex: 10
    }}>
      <List sx={{ maxHeight: '75vh', overflowY: 'auto' }}>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText
              primary={<Typography type="body2" style={{ color: message.isUser ? 'blue' : 'grey' }}>{message.text}</Typography>}
            />
          </ListItem>
        ))}
      </List>
      <Box component="form" onSubmit={sendMessage} sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
        <TextField
          fullWidth
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          variant="outlined"
        />
        <Button type="submit" sx={{ ml: 1 }} variant="contained">Send</Button>
      </Box>
    </Paper>
  );
}
