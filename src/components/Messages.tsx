import { auth } from "../firebase-config/firebaseConfig"
import { Message } from "./ChatRoom"

interface MessageProps {
  messages: Message[]
}
const Messages: React.FC<MessageProps> = ({ messages }: MessageProps) => {
  return (
    <ul className="chat">
        {messages.map((message) => (
          <li
            key={message.id}
            className={
              auth.currentUser?.displayName === message.username
                ? "self"
                : "other"
            }
          >
            <div className="msg">
              <div className="user">{message.username}</div>
              <p>{message.text}</p>
              <time>{message.createdAt?.toDate().toLocaleString()}</time>
            </div>
          </li>
        ))}
      </ul>
  )
}

export default Messages