import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../firebase';

const ChatBox = () => {

  const messagesEndRef = useRef();
  const [ messages, setMessages ] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behaviour: "smooth" })
  };

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });
      setMessages(messages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className='container mx-auto md:max-w-4xl py-16'>
      {messages.map(text => (
        <Message key={text.id} message={text} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  )
}

export default ChatBox
