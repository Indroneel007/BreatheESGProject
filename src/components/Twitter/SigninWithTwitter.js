import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import Twitter from "../../images/twitter.svg"
import './SigninWithTwitter.scss'
import { useNavigate } from "react-router-dom";

function SignInWithTwitter() {
  const navigate = useNavigate();
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        navigate('/data');
      }
    });
  }
  return (
      <button onClick={googleLogin} className="button-with-image">
        <img src={Twitter} alt="twitter" className="button-image" />
        <span className="button-text">Sign In with Google</span>
      </button>
  );
}
export default SignInWithTwitter;