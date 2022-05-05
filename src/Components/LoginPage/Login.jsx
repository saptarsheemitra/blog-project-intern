import React from 'react'
import {auth,provider} from "../../firebase-config";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth})=>{
    let navigate = useNavigate();

    const signInWithGoogle = ()=> {
        signInWithPopup(auth,provider).then((result) => {
            localStorage.setItem("isAuth",true);
            setAuth(true)
            navigate("/createpost")
        })
    }
    return(
        <>
        <div className='loginPage'>
            <p>Sign in with Google to continue</p>
            <button className='login-with-google' onClick={signInWithGoogle}> 
                Login
                </button>

        </div>
        </>
    );
}

export default Login