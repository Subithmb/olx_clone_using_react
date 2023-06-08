import React ,{useState,useRef,useContext} from 'react';
import { FirebaseContext } from '../../Store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const Navigate=useNavigate()
  const auth = getAuth();
  const { FireBase,db } = useContext(FirebaseContext);
  const [email,SetEmail]=useState('');
  const[password,SetPassword]=useState('')
  const emailRef=useRef(null)
  const passwordRef=useRef(null)

  const loginSubmit=(e)=>{
    emailRef.current.focus() 
  passwordRef.current.focus()
  SetEmail(emailRef.current.value)
  SetPassword(passwordRef.current.value)
    e.preventDefault();
    const auth = getAuth(FireBase);
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((result) => {
        // Signed in 
        Navigate('/')
       
    }).catch((error)=>{
      alert(error.message)
    })


  console.log(emailRef.current.value,'.........',passwordRef.current.value);
  emailRef.current.value='' 
  passwordRef.current.value='' 
}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>

        <form onSubmit={loginSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
           ref={emailRef}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            ref={passwordRef}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
