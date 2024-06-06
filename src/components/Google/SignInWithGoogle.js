import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import Google from "../../images/google.svg"
import './SignInWithGoogle.scss'
import Sidenav from "../Sidenav/Sidenav";

function SignInWithGoogle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        window.location.href = "/data";
      }
    });
  }

  return (
      <button onClick={googleLogin} className="button-with-image">
        <img src={Google} className="button-image" />
        <span className="button-text">Sign In with Google</span>
      </button>
  );
}
export default SignInWithGoogle;