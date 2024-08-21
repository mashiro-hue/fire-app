import { signOut } from "firebase/auth";
import { auth } from "../firebase-config/firebaseConfig";
import toast from "react-hot-toast";

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      signOut(auth);
      toast.success("Signed Out Successfully");
    } catch (e) {
      console.error(e);
      toast.error("Failed to sign out");
    }
    signOut(auth);
  };
  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
