import React, { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import { Button } from '@mui/material';
import Chat from './Chat';

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ChatIcon />}
        onClick={toggleChat}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          borderRadius: 20, // Adjust for rounded corners
        }}
      >
        Live Chat
      </Button>
      {open && <Chat />}
    </>
  );
}
