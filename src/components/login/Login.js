import './Login.css';
import { SiMinutemailer } from 'react-icons/si';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import logo from './Dreamydeals-logos_white.png'

const Login = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/Register');
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage,setAlertMessage]=useState("");

  const handleClickHome = () =>{
    var email= document.getElementById("email").value;
    var pass= document.getElementById("password").value;
    if(email.length===0)
    {
      setAlertMessage('Enter valid Email')
    }
    if(!/^\S+@\S+\.\S+$/.test(email))
    {
      setAlertMessage('Email is not valid')
    }
    else if(pass.length===0)
    {
      setAlertMessage('Enter the password')
    }
    else if (pass.length < 6) {
      setAlertMessage('Password must be at least 6 characters long');
    }
    else if(email.length===0 || pass.length===0){
      setAlertMessage("Please Check The Email ID or Password")
    }
    else{
    navigate('/Home');
    } 
  }

  // const signIn = (e) => {
  //   e.preventDefault();
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  return (
    <div className='section'>
      <img  className='llogo' src={logo} alt='logo'/>
      <div className="form-box">
        {/* <form onSubmit={signIn}> */}
          <div className="form-value">
            <h2>LOGIN</h2>
            <span className='alertmessage'>{alertMessage}</span>
            <div className="inputbox">
              <SiMinutemailer className='licons' />
              <input type="email" required id="email" autoComplete='off' 
              value={email} onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="email">Email-ID</label>
            </div>
            <div className="inputbox">
              <RiLockPasswordLine className="licons" />
              <input type="password" required id='password'
                value={password} onChange={(e) => setPassword(e.target.value)}/> 
              <label htmlFor="password">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="rememberMe"><input type="checkbox" value="IsRememberMe" id="rememberMe" />Remember Me</label>
            </div>
            <button className='login' onClick={handleClickHome}>Log in</button>
            <div className="forget">
              <Link to="/reset-password">Forget Password</Link>
            </div>
            <div className="register">
              <p>Don't have an account?
                <span className='register1' onClick={handleclick}>Register</span>
              </p>
            </div>
          </div>
        {/* </form> */}
      </div>
    </div>
  )
}

export default Login;
