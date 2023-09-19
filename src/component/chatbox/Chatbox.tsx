import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { db } from "../../firebase/config.firebase";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef<any>();
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc"),
      limit(50)
    );
    const unsubscribe : any = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages : any[] = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages : any = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message : any) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;