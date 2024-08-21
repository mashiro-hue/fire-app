import { auth } from "../firebase-config/firebaseConfig"
import SignOut from "./SignOut"

const ChatHeading = () => {
  return (
    <div className="heading">
            <a href="#" className="back"><img src="https://i.imgur.com/G4EjwqQ.jpg" draggable="false"/></a>
            <div className="name">Fire Chat</div>
            <div className="signout">{auth.currentUser && <SignOut />}</div>
        </div>
  )
}

export default ChatHeading