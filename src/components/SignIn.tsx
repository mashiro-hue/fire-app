import { googleProvider, auth } from "../firebase-config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import HeaderDesign from "./HeaderDesign";
import googleIcon from "../assets/google-svgrepo-com.svg";

const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      toast.success(`You have logged in as ${user.displayName}`);
    } catch (e) {
      console.error(e);
      toast.error("Error logging in!");
    }
  };

  return (
    <div className="login">
      <header>
        <HeaderDesign />
      </header>
      <button className="login-btn" onClick={signInWithGoogle}>
        Sign in with Google &nbsp;
        <span>
          <img src={googleIcon} alt="google icon" width="35px" height="35px" />
        </span>
      </button>
    </div>
  );
};

export default SignIn;
