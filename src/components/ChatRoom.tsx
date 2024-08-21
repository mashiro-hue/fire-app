import {
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase-config/firebaseConfig";
import { useEffect, useState } from "react";
import TypeZone from "./TypeZone";
import ChatHeading from "./ChatHeading";
import Messages from "./Messages";

export interface Message {
  id: string;
  text: string;
  uid: string;
  createdAt: any;
  username: string;
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const messageRef = collection(db, "messages");
    const q = query(messageRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesList: Message[] = snapshot.docs.map((doc) => ({
        ...(doc.data() as Message), // Type assertion to ensure data conforms to `Message` interface
      }));
      setMessages(messagesList);
    });

    return () => unsubscribe(); // Clean up the subscription when the component unmounts
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = async () => {
    if (message.trim() === "") return; // Prevent sending empty messages

    const messageRef = collection(db, "messages");
    await addDoc(messageRef, {
      text: message,
      uid: auth.currentUser?.uid, // Replace with actual user ID
      createdAt: serverTimestamp(), // Use server timestamp for createdAt
      username: auth.currentUser?.displayName,
    });

    setMessage(""); // Clear the input field after sending the message
  };

  return (
    <div>
      <ChatHeading />
      <Messages messages={messages}/>
      <TypeZone
        handleChange={handleChange}
        handleSend={handleSend}
        message={message}
      />
    </div>
  );
};

export default ChatRoom;
