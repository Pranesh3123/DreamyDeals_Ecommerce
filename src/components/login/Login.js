import './Login.css';
import { SiMinutemailer } from 'react-icons/si';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/Register');
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage,setAlertMessage]=useState("");

  const handleClickHome = () =>{
    var a= document.getElementById("email").value;
    var b= document.getElementById("password").value;
    if(a.length===0 || b.length===0){
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
