import React, { useEffect,useState} from 'react';
import { io } from 'socket.io-client';
import {Button,TextField,Container, Typography} from "@mui/material";
import { useMemo } from 'react';
const App = () => {
   const socket =useMemo(()=> io("http://localhost:3000"), []) 

   const [message, setMessage] = useState("");
    const [room, setRoom] = useState("");
   const [socketId, setSocketId] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message',{ message, room });
    setMessage("");
  }
  useEffect(() => {
      socket.on('connect', () => {
      setSocketId(socket.id);
      console.log("Connected to server, socket id:", socket.id);
    });

    socket.on('receive_message', (data) => {
      console.log("Received message:", data);
    });

    socket.on('welcome', (s) => {
      console.log(s)

    });
    return () => {
  
      socket.disconnect();
    };
  }, []);

  return (
  
      <Container maxWidth="sm">
     
      <Typography variant="h6 " component="div" gutterBottom>
      {socketId}
        </Typography>

        <form onSubmit={handleSubmit}>
            <TextField
            id='outlined-basic'
              label="Message"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
            />
            <TextField
            id='outlined-basic'
              label="Room"
              variant="outlined"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              
            />
         <Button type='submit' variant="contained" color='primary' >Send</Button>va
           
          </form>
    </Container>
    
    
    
  
  );
};

export default App;
