import React, { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import { Fab } from '@mui/material';
import Chat from './Chat'; 

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <>
      <Fab color="primary" aria-label="chat" onClick={toggleChat} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <ChatIcon />
      </Fab>
      {open && <Chat />}
    </>
  );
}