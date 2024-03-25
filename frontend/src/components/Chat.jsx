import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';
import OpenAI from 'openai';
import {systemMessageTemplate} from '../helper/prompt'
import { useProductContext } from '../contexts/ProductContext';

export default function Chat() {
  const {products} = useProductContext();
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
    const fetchResponse = async (prompt) => {
      //setup
      
      const openai = new OpenAI({
        apiKey:import.meta.env.OPENAI_API_KEY,
        organization:import.meta.env.OPENAI_ORG,
        dangerouslyAllowBrowser: true
      }
      );
      
      const values= {
        currentPage: window.location.href,
        userMessage: prompt.text,
        products: JSON.stringify(products)

      }
      console.log(prompt,products)
      console.log(values,systemMessageTemplate(values))

      const messageHistory = [
        {
          role: "system",
          content: systemMessageTemplate(values)
        },
        ...messages.map(message => ({
          role: message.isUser ? "user" : "assistant",
          content: message.text,
        }))
      ];
      try {
        const completionResponse = await openai.chat.completions.create({
          model: "gpt-3.5-turbo", 
          messages: messageHistory,
        })
         
        return completionResponse.choices[0].message.content.trim();
      } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
        return "I'm sorry, I couldn't fetch a response.";
      }
    };

    if (messages.length && messages[messages.length - 1].isUser) {
      const lastUserMessage = messages[messages.length - 1].text;
      fetchResponse(lastUserMessage).then((botResponse) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), text: botResponse, isUser: false },
        ]);
      });
    }
  }, [messages]);

  return (
    <Paper elevation={5} sx={{
      position: 'fixed',
      bottom: 20,
      right: 16,
      width: 350,
      maxHeight: '80vh',
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
