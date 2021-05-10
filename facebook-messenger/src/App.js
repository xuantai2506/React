import React ,{useState,useEffect} from 'react';
import {Button , FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([
    {username : "Hiền" , text : "I love you"},
    {username : "Tài" , text : "I love you too"}
  ]);
  const [username,setUsername] = useState('');

  const sendMessages = (event) => {
    setMessages([...messages,{username : username,text : input}]);
    setInput('');
  }

  useEffect(() => {
    setUsername(prompt("Please enter user name !"));
  }, [])

  return (
    <div className="App">
      <h1> Hello, This is App Messages </h1>
      <h2> Welcome {username} to comeback !</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" onClick={sendMessages}>Send Mesages</Button>
        </FormControl>
      </form>

      {
        messages.map((message,index) => (
          <Message key={index} username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
