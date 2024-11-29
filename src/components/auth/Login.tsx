import React, { useState } from 'react'
import '../../css/auth/login.css'
import axios from 'axios';

function Login() {

    const [username,SetUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async () => {

        //send login request to backend
        //success comes with token and status code 200
        //failure will only have error and 201 status code
    }

  return (
   <center>
     <div className='login-container'>
        <h3>Welcome to ABC Auctions</h3>
        <br />
        <h2>Login</h2>
        <div className='login-inputs'>
            <input type="text" 
                name="username" 
                id="username" 
                placeholder='username' 
                onChange={e => SetUsername(e.target.value)}/>
            <input type="password" 
                name="password" 
                id="password" 
                placeholder='password'
                onChange={e =>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div> 
    </div>
   </center>
  )
}

export default Login