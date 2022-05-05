import React from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";

const Login = ({ setAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setAuth(true);
      navigate("/createpost");
    });
  };
  return (
    <>
      <div className="loginPage-container">
        <div className="login">
          <p>Sign in with Google to continue</p>
          {/* <button className="login-with-google" onClick={signInWithGoogle}>
            Login
          </button> */}
          <button onClick={signInWithGoogle}className="login-with-google-btn">
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
