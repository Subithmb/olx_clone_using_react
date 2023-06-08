import React, { useRef, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  const usernameRef=useRef(null)
  const emailRef=useRef(null)
  const phoneRef=useRef(null)
  const passwordRef=useRef(null)
const handleSubmit=(e)=>{
e.preventDefault();
usernameRef.current.focus()
console.log(usernameRef.current.value);

setUsername(usernameRef.current.value)
setEmail(emailRef.current.value)
setPhone(phoneRef.current.value)
setPassword(passwordRef.current.value)

}
console.log(username,email,phone,password);

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} ></img>

        < form onSubmit={handleSubmit}>
          
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            ref={usernameRef}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
          ref={emailRef}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
          ref={phoneRef}
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
           ref={passwordRef}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
