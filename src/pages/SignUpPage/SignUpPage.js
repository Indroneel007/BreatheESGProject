import React, {useState} from 'react'
import './SignUpPage.scss'
import Breathe from '../../images/Breathe.svg'
import earthlogo from '../../images/earthlogo.png'
import {auth, db} from '../../components/firebase'
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Sidenav from '../../components/Sidenav/Sidenav'

const SignUpPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("")
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
        });
      }
      console.log("User Registered Successfully!!");
      window.location.href = "/data";
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const checkValidate=(e)=>{
    setconfirmPassword(e.target.value);
  }

  return (
    <div className="container">
  <div className="left">
    <div className="box">
        <img src={Breathe} className="Breatheimage" />
    </div>
  </div>
  <div className="right">
    <div className="imagelogo">
      <img src={earthlogo} className="earthlogo" />
    </div>
    <div className="signupform">
    <div className="Formdesign">
    <form onSubmit={handleRegister}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Your Email ID"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          onChange={(e) => checkValidate(e)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </div>
    </form>
    </div>
    </div>
  </div>
</div>
  )
}

export default SignUpPage