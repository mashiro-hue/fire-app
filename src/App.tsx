import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase-config/firebaseConfig";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import { Toaster } from "react-hot-toast";
import "./styles/global.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Toaster />
      <div>
        <div className="chat-container">{user ? <ChatRoom /> : <SignIn />}</div>
      </div>
    </>
  );
}

export default App;
