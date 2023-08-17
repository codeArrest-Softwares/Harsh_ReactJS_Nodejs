import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS file

function App() {

 const [emailID,setEmailID]=useState('');
 const[password,setPassword]=useState('');



 const submit = async(event) =>{
            event.preventDefault();

    try{
        await  axios.post("http://localhost:8000/",{emailID,password}
      )
    }

    catch(event){
      console.log(event);
      console.log('ye wali line');
    }

  }
  return (
    <div className="App">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/images/log_in_pic.png'} alt="Sign-Up Logo Picture" />
      </div>
      <div className="login-details">
        <div className="Logo_Name">
          <img src={process.env.PUBLIC_URL + '/images/logo_2.png'} alt="logo image" />
        </div>
        <div className="no-Account">
       
          <p>Don't have an account! Sign up</p>
        </div>
        <div className="login-form">
          <h2>Hello ! let's get started</h2>
          <form>
            <label htmlFor="username">Enter your details below. </label>
            <br></br>
             <div className='email-box'>
              <img id="email-image" src="../images/Email.png" alt="email logo"></img>
              <input id="email-input" type="text"  name="username" placeholder="Enter Email Address" onChange={(e)=>{setEmailID(e.target.value)}}/>
            <br></br>
            </div>
    
            <div className='password-box'>
            <img id="password-image" src="../images/password.png" alt="email logo"></img>
            <input type="password" id="password" name="password" placeholder="Enter your password"  onChange={(e)=>{setPassword(e.target.value)}}/>
            <br></br>
            </div>
    
            <button type="submit" onClick={submit}>SIGN IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
