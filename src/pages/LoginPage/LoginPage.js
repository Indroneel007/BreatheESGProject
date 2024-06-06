import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import './LoginPage.scss'
import { auth } from '../../components/firebase';
import { toast } from "react-toastify";
import Breathe from '../../images/Breathe.svg'
import earthlogo from '../../images/earthlogo.png'
import SignInWithGoogle from "../../components/Google/SignInWithGoogle";
import SignInWithTwitter from "../../components/Twitter/SigninWithTwitter";
import { Link, useNavigate } from 'react-router-dom';
import Sidenav from "../../components/Sidenav/Sidenav";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/data";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

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
    <div className="loginform">
      <div className="loginformdesign">
        
      <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <p className="p1">Enter your registered Email ID to continue</p>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <SignInWithGoogle />
      <SignInWithTwitter />
      <p className="p2">
        Having trouble logging in? <Link to='/signup'>Signup</Link>
      </p>
      <div className="d-grid">
        <button type="submit" className="btn1">
          Submit
        </button>
      </div>
      </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default LoginPage