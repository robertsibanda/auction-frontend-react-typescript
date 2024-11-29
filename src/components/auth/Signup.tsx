import React, { useState } from 'react'
import '../../css/auth/login.css'
import axios from 'axios';

function Signup() {

    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [username,SetUsername] = useState('');
    const [password,setPassword] = useState('');


    const handleLogin = async () => {

        //send singup request to backend
        //success comes with token and status code 200 & edirect to homepage
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
                name="fullname" 
                id="username" 
                placeholder='full name' 
                onChange={e => setFullName(e.target.value)}/>
             <input type="text" 
                name="email" 
                id="email" 
                placeholder='user@mail.com' 
                onChange={e => setEmail(e.target.value)}/>
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
            <button onClick={handleLogin}>Sigup</button>
        </div> 
    </div>
   </center>
  )
}

export default Signup